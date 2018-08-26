/**
 * Created by maximedenoun on 2017-05-01.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserCardComponent} from "./user-card.component";

const routes:Routes = [
  {path: '', component:UserCardComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserCardRoutingModule { }

