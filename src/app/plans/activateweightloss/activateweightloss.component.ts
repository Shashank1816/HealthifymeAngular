import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Diet } from 'src/app/Diet';
import { Plan } from 'src/app/Plan';
import { Workout } from 'src/app/Workout';

@Component({
  selector: 'app-activateweightloss',
  templateUrl: './activateweightloss.component.html',
  styleUrls: ['./activateweightloss.component.css']
})
export class ActivateweightlossComponent implements OnInit {

  constructor(public appservice: AppService,public route:Router) { }

  goalentered: number = 0;

  ngOnInit(): void {
  }

  weightlossactivation() {
    // this.selectedplan.plan_id=1;
    // this.selectedplan.plan_name="weightloss";
    // this.selectedplan.diet=this.diet;
    // this.selectedplan.workout=this.workout;
    // //this.selectedplan.plan_name="weightgain";
    // this.appservice.globalloggedinuser.plan=this.selectedplan;
    // this.appservice.globalloggedinuser.weight_goal=this.goalentered;
    // console.log("inside weightlossactivation ",this.selectedplan);
    // console.log("Inside weightlossactivation - after plan set to user the user is : ",this.appservice.globalloggedinuser);
    // this.appservice.activateplan(this.appservice.globalloggedinuser).subscribe(data=>{
    //   console.log("After getting the response in weightloss ",data);
    // });

    return this.appservice.activateplan(1, this.goalentered).subscribe(data => {
      console.log("Successfully activated Weight Loss Plan", data);
      alert("Activated Your weight loss plan successfully.Please logout and check your profile for details!");
      this.route.navigateByUrl("profile/{{this.appservice.globalloggedinuser.email}}");
    });
  }

}
