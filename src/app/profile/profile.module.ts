import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    ProfilepageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports:[
    ProfilepageComponent
  ]
})
export class ProfileModule { }
