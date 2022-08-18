import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalorietrackerComponent } from './calorietracker/calorietracker/calorietracker.component';
import { TrackersComponent } from './trackers/trackers.component';
import { WatertrackerComponent } from './watertracker/watertracker/watertracker.component';
import { WeighttrackerComponent } from './weighttracker/weighttracker/weighttracker.component';
const routes: Routes = [
    {
        path: 'trackers',
        component: TrackersComponent,
        children: [
            { path: 'water', component: WatertrackerComponent },
            { path: 'calorie', component: CalorietrackerComponent },
            { path: 'weight', component: WeighttrackerComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrackersRoutingModule { }
