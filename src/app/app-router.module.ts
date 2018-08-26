/**
 * Created by maximedenoun on 2017-05-25.
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
/*
import {AuthGuardService} from "./auth-guard.service";
import {AuthService} from "./auth.service";
*/

const routes:Routes = [
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }/*,
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }*/,
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    /*canActivateChild: [AuthGuardService]*/
  },
  /* ToDo,
   { path: '**', component: PageNotFoundComponent }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]/*,
  providers: [AuthService, AuthGuardService]*/
})
export class AppRouterModule {}
