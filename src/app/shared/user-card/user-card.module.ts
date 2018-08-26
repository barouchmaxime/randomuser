import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserCardComponent} from "./user-card.component";
import {UserCardRoutingModule} from "./user-card-routing.module";
import {ToolBarModule} from "../tool-bar/tool-bar.module";
import {MatButtonModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    UserCardRoutingModule,
    ToolBarModule
  ],
  declarations: [UserCardComponent],
  exports: [UserCardComponent]
})
export class UserCardModule { }
