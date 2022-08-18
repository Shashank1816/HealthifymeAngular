import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingpageComponent } from './landing/landingpage/landingpage.component';
import { PlansComponent } from './plans/plans/plans.component';
import { ProfilepageComponent } from './profile/profilepage/profilepage.component';
import { TrackersComponent } from './trackers/trackers/trackers.component';

const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgotpass',
    component:ForgotpasswordComponent
  },
  {
    path:'profile/:email',
    component:ProfilepageComponent
  },
  {
    path:'plans',
    component:PlansComponent
  },
  {
    path:'trackers',
    component:TrackersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
