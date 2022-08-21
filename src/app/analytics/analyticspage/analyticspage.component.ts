import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-analyticspage',
  templateUrl: './analyticspage.component.html',
  styleUrls: ['./analyticspage.component.css']
})
export class AnalyticspageComponent implements OnInit {

  constructor(private appservice: AppService) { }

  ngOnInit(): void {

  }

  getweightarray() {
    this.appservice.getUsersWeightList().subscribe(data => {
      console.log("Retrieved Weights : ", data);
    });
  }
  getWaterArray() {

  }
  getCalorieArrays() {

  }


}
