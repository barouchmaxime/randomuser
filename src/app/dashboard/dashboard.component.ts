import { Component, OnInit } from '@angular/core';
import {AppState, IRandomUser, IUserIcon} from "../app.types";
import {Observable} from "rxjs";
import { Store, select } from '@ngrx/store';
import {LOADED} from "../app.reducers";
import {AppService} from "../app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public users$:Observable<IRandomUser[]>;
  public userIcons:IUserIcon[];
  constructor(private store: Store<AppState>, private service: AppService) {
    this.users$ = store.pipe(select('users'));
  }

  ngOnInit() {
    this.service.getRamdomUser().subscribe(
      users => {this.store.dispatch({ type: LOADED, payload: users })}
    );
    this.userIcons = this.service.getUserIcons();
  }

}
