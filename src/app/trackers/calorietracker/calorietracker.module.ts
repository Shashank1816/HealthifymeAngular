import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalorietrackerComponent } from './calorietracker/calorietracker.component';



@NgModule({
  declarations: [
    CalorietrackerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CalorietrackerComponent
  ]
})
export class CalorietrackerModule { }
