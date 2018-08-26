import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../app.types";
import {INCREMENT_VOTE} from "../../app.reducers";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  private selectedId ;
  public user;
  private users;
  public icons;
  public userFieldLabel;
  public userFieldValue;
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private service:AppService) {
    store.pipe(select('users')).subscribe(
      users => {
        this.users = users;
        this.user = this.getSelectedUser();
      }
    );
    this.icons = service.getUserIcons();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.selectedId = +params.get('id');
        this.user = this.getSelectedUser();
      }
    );
  }
  changeUserField(icon) {
    this.userFieldLabel = icon.userFieldLabel;
    this.userFieldValue = icon.userFieldValue;
  }
  getSelectedUser() {
    return this.users[this.selectedId];
  }
  vote() {
    this.store.dispatch({ type: INCREMENT_VOTE, payload: {id: this.selectedId} });
  }
}
