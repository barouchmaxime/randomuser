import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRouterModule} from "./app-router.module";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import { StoreModule } from '@ngrx/store';
import { users, selectedId } from './app.reducers';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    StoreModule.forRoot({ users: users, selectedId: selectedId }),
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
