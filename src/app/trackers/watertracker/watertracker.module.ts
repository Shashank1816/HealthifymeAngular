import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatertrackerComponent } from './watertracker/watertracker.component';



@NgModule({
  declarations: [
    WatertrackerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WatertrackerComponent
  ]
})
export class WatertrackerModule { }
