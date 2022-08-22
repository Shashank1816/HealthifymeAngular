import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AnalyticsModule } from './analytics/analytics.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BodyModule } from './body/body.module';
import { CaloriecounterModule } from './caloriecounter/caloriecounter.module';
import { FooterModule } from './footer/footer.module';
import { LandingModule } from './landing/landing.module';
import { NavbarModule } from './navbar/navbar.module';
import { ProfileModule } from './profile/profile.module';
import { CalorietrackerModule } from './trackers/calorietracker/calorietracker.module';
import { TrackersModule } from './trackers/trackers.module';
import { WatertrackerModule } from './trackers/watertracker/watertracker.module';
import { WeighttrackerModule } from './trackers/weighttracker/weighttracker.module';
import { NgChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BodyModule,
    FooterModule,
    LandingModule,
    ProfileModule,
    HttpClientModule,
    FormsModule,
    TrackersModule,
    CaloriecounterModule,
    AnalyticsModule,
    GoogleChartsModule,
    NgChartsModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
