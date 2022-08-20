import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaloriecounterpageComponent } from './caloriecounterpage/caloriecounterpage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CaloriecounterpageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule
  ]
})
export class CaloriecounterModule { }
