/**
 * Created by maximedenoun on 2017-05-25.
 */
import { DashboardComponent } from "./dashboard.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes = [
  {
    path: '',
    component:DashboardComponent,
    children: [
      /*{ path: '', redirectTo: './user-card/:id', pathMatch: 'full' },
      { path: './user-card/:id', loadChildren: '../shared/user-card/user-card.module#UserCardModule'}*/
      /*{ path: '', redirectTo: '/dashboard/user-card/:id', pathMatch: 'full' },
      { path: '/dashboard/user-card/:id', loadChildren: '../shared/user-card/user-card.module#UserCardModule'}*/
      { path: '', redirectTo: '/dashboard/user-card/:id', pathMatch: 'full' },
      { path: 'user-card/:id', loadChildren: '../shared/user-card/user-card.module#UserCardModule'},
      { path: '**',   redirectTo: '/dashboard/user-card', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
