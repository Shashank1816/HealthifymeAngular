import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeighttrackerComponent } from './weighttracker/weighttracker.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WeighttrackerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    WeighttrackerComponent
  ]
})
export class WeighttrackerModule { }
