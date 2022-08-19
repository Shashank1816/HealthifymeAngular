import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatertrackerComponent } from './watertracker/watertracker.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WatertrackerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    WatertrackerComponent
  ]
})
export class WatertrackerModule { }
