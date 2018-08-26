import { Injectable } from '@angular/core';
import {IRandomUser, IUserIcon, UserIcon} from "./app.types";
import {Observable, of} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";

@Injectable()
export class AppService {
  private ramdomUserUrl = 'https://randomuser.me/api/?results=10';
  private userIcons:IUserIcon[] = [];

  constructor(private http: HttpClient) {
    this.userIcons.push(new UserIcon('fa fa-user-o', 'Hi, My name is', 'displayName'));
    this.userIcons.push(new UserIcon('fa fa-envelope-o', 'My email address is', 'email'));
    this.userIcons.push(new UserIcon('fa fa-calendar-o', 'My birthday is', 'birthday'));
    this.userIcons.push(new UserIcon('fa fa-map-marker', 'My address is', 'address'));
    this.userIcons.push(new UserIcon('fa fa-phone', 'My phone number is', 'phone'));
    this.userIcons.push(new UserIcon('fa fa-unlock-alt', 'My password is', 'password'));
  }
  getUserIcons() {
    return this.userIcons;
  }
  getRamdomUser() : Observable<IRandomUser[]>{
    return this.http.get<{results:IRandomUser[]}>(this.ramdomUserUrl)
      .pipe(
        map(users => {
            return users.results.map((user, index)  => {
              var dispName = user.name.first.toLowerCase() +' ' + user.name.last.toLowerCase();
              user.id = index;
              user.vote = 0;
              user.route = `/dashboard/user-card/${index}`;
              user.displayName = this.capitalize(dispName);
              user.birthday = moment(user.dob.date).format("DD/MM/YYYY");
              user.address = this.capitalize(user.location.street);
              user.password = user.login.password;
              return user} )
          }
        ),
        tap(users => this.log('fetched heroes')),
        catchError(this.handleError('getRamdomUser', []))
      );
  }
  private capitalize(str) {
    str = str.split(" ");
    str = str.map(word => {
      word = word.replace(/^\w/, c => c.toUpperCase());
      return word;
    })
    return str.join(" ");
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`AppService: ${message}`);
  }
}
