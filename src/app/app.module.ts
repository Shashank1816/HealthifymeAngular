import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';
import { LandingModule } from './landing/landing.module';
import { NavbarModule } from './navbar/navbar.module';
import { PlansModule } from './plans/plans.module';
import { ProfileModule } from './profile/profile.module';
import { CalorietrackerModule } from './trackers/calorietracker/calorietracker.module';
import { TrackersModule } from './trackers/trackers.module';
import { WatertrackerModule } from './trackers/watertracker/watertracker.module';
import { WeighttrackerModule } from './trackers/weighttracker/weighttracker.module';

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
    AuthModule,
    LandingModule,
    ProfileModule,
    HttpClientModule,
    FormsModule,
    PlansModule,
    TrackersModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
