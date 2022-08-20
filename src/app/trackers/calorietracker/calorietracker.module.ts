import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalorietrackerComponent } from './calorietracker/calorietracker.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalorietrackerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CalorietrackerComponent
  ]
})
export class CalorietrackerModule { }
