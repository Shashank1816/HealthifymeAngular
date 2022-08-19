import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { PlansRoutingModule } from './plans-routing.module';



@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    PlansRoutingModule
  ],
  exports:[
  ]
})
export class PlansModule { }
