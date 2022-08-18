import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeighttrackerComponent } from './weighttracker/weighttracker.component';



@NgModule({
  declarations: [
    WeighttrackerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WeighttrackerComponent
  ]
})
export class WeighttrackerModule { }
