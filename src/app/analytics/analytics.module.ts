import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticspageComponent } from './analyticspage/analyticspage.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    AnalyticspageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class AnalyticsModule { }
