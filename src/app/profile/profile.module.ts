import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { ActiveplancardComponent } from './activeplancard/activeplancard.component';
import { BuyplancardComponent } from './buyplancard/buyplancard.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    ProfilepageComponent,
    ActiveplancardComponent,
    BuyplancardComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    NavbarModule,
    FooterModule
  ],
  exports:[
    ProfilepageComponent
  ]
})
export class ProfileModule { }
