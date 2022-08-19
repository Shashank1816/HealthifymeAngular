import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackersComponent } from './trackers/trackers.component';
import { WatertrackerComponent } from './watertracker/watertracker/watertracker.component';
import { WeighttrackerComponent } from './weighttracker/weighttracker/weighttracker.component';
import { CalorietrackerComponent } from './calorietracker/calorietracker/calorietracker.component';
import { WatertrackerModule } from './watertracker/watertracker.module';
import { WeighttrackerModule } from './weighttracker/weighttracker.module';
import { CalorietrackerModule } from './calorietracker/calorietracker.module';
import { TrackersRoutingModule } from './trackers-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrackersComponent
  ],
  imports: [
    CommonModule,
    CalorietrackerModule,
    WatertrackerModule,
    WeighttrackerModule,
    TrackersRoutingModule,
    NavbarModule,
    FormsModule
  ],
  exports:[
    WatertrackerModule,
    WeighttrackerModule,
    CalorietrackerModule
  ]
})
export class TrackersModule { }
