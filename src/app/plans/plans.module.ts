import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ],
  exports:[
    PlansComponent
  ]
})
export class PlansModule { }
