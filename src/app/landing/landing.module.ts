import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { BodyModule } from '../body/body.module';
import { FooterModule } from '../footer/footer.module';
// import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    BodyModule,
    FooterModule,
    // AuthModule
  ],
  exports:[
    LandingpageComponent
  ]
})
export class LandingModule { }
