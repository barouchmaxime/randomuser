import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar.component';
import {UserCardComponent} from "../user-card/user-card.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolBarComponent],
  exports: [ToolBarComponent]
})
export class ToolBarModule { }
