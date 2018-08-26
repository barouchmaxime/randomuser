/**
 * Created by maximedenoun on 2017-05-25.
 */
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouterModule} from "./dashboard-router.module";
import {CommonModule} from "@angular/common";
import {NavigationModule} from "../shared/navigation/navigation.module";
import {UserCardModule} from "../shared/user-card/user-card.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRouterModule,
    NavigationModule,
    UserCardModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: []
})
export class DashboardModule {}
