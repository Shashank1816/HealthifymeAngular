import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-caloriecounterpage',
  templateUrl: './caloriecounterpage.component.html',
  styleUrls: ['./caloriecounterpage.component.css']
})
export class CaloriecounterpageComponent implements OnInit {

  constructor(public appservice:AppService) { }

  foodname ="";
  ngOnInit(): void {
  }

  foodapi(){
    console.log("inside foodapi" ,this.foodname);
    this.appservice.getfoodinfo(this.foodname);
  }
}
