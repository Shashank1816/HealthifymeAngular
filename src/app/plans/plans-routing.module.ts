import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateweightlossComponent } from './activateweightloss/activateweightloss.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlansRoutingModule { }
