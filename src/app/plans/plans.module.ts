import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { PlansRoutingModule } from './plans-routing.module';
import { ReviewComponent } from './review/review.component';
import { ActivateweightlossComponent } from './activateweightloss/activateweightloss.component';
import { ActivateweightgainComponent } from './activateweightgain/activateweightgain.component';
import { ActivatemusclebuildComponent } from './activatemusclebuild/activatemusclebuild.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlansComponent,
    ReviewComponent,
    ActivateweightlossComponent,
    ActivateweightgainComponent,
    ActivatemusclebuildComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    PlansRoutingModule,
    FormsModule
  ],
  exports:[
  ]
})
export class PlansModule { }
