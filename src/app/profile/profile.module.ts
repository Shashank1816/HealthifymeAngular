import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfilepageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ],
  exports:[
    ProfilepageComponent
  ]
})
export class ProfileModule { }
