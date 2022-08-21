import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticspageComponent } from './analyticspage/analyticspage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AnalyticsRoutingModule } from './analytics-routing.module';



@NgModule({
  declarations: [
    AnalyticspageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
