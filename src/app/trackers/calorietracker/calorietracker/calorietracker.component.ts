import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Calorie } from 'src/app/Calorie';
import { User } from 'src/app/User';

@Component({
  selector: 'app-calorietracker',
  templateUrl: './calorietracker.component.html',
  styleUrls: ['./calorietracker.component.css']
})
export class CalorietrackerComponent implements OnInit {

  constructor(public appservice: AppService) { }

  currentcalorie = new Calorie;
  date : string = "";
  caltoday: any;

  ngOnInit(): void {
  }
  
  submitcaloriedata() {
    console.log("The entered calorie data is ", this.caltoday + " and " + this.date);
    this.currentcalorie.calories = this.caltoday;
    this.currentcalorie.date = this.date;
    this.currentcalorie.user = <User>this.appservice.globalloggedinuser;
    console.log("The current calorie data is ", this.currentcalorie);
    this.appservice.submitcalorieinfo(this.currentcalorie).subscribe(data => {
      console.log("inside SubmitCalorie data after sending the request and getting some response ", data);
    }
    );
    alert("Your data for today is submitted");
  }

}
