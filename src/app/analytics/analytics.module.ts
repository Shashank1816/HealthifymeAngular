import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticspageComponent } from './analyticspage/analyticspage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AnalyticspageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    GoogleChartsModule,
    FormsModule,
    NgChartsModule
  ],
  exports:[
    AnalyticspageComponent
  ]
})
export class AnalyticsModule { }
