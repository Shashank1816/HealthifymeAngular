import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaloriecounterpageComponent } from './caloriecounterpage/caloriecounterpage.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    CaloriecounterpageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class CaloriecounterModule { }
