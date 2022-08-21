import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticspageComponent } from './analyticspage/analyticspage.component';

const routes: Routes = [
    {
        path: '',
        component: AnalyticspageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
