import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticspageComponent } from './analyticspage/analyticspage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    AnalyticspageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AnalyticsRoutingModule,
    GoogleChartsModule,
    FormsModule,
    NgChartsModule,
    FooterModule
  ],
  exports:[
    AnalyticspageComponent
  ]
})
export class AnalyticsModule { }
