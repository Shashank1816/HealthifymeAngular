import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaloriecounterpageComponent } from './caloriecounterpage/caloriecounterpage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    CaloriecounterpageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    FooterModule
  ]
})
export class CaloriecounterModule { }
