import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/Plan';
import { Diet } from 'src/app/Diet';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(private appservice: AppService, private route:Router) { }

  ngOnInit(): void {
  }

  //just to check whether click is working or not.
  // afterclick(){
  //   alert("Click is working");
  // }

  plan: Plan = new Plan;
  addPlan(plan_id: number) {
    this.appservice.getPlan(plan_id).subscribe(data => {
      this.plan = data;
      console.log("Check Plan", this.plan);
    })

    // console.log("Calling Diet :");
    // // this.plan.diet = this.appservice.getDiet(plan_id);
    // this.appservice.getDiet(plan_id).subscribe((data) => {
    //   this.plan.diet = data;
    //   console.log("Check Diet : ", this.plan);
    // })

    // console.log("Calling Workout :");
    // this.appservice.getWorkout(plan_id).subscribe((data) => {
    //   this.plan.workout = data;
    //   console.log("Check Workout : ", this.plan);
    // })
  }

  //function after selecting weight loss
  activateweightloss(){
    if(this.appservice.globalloggedinuser){
      //alert("You have selected weight loss!");
      this.route.navigateByUrl("/plans/weightloss");
    }
    else{
      alert("You need to be logged in first!");
      this.route.navigateByUrl("/login");
    }
    
  }

  //function after selecting weight gain
  activateweightgain(){
    if(this.appservice.globalloggedinuser){
      //alert("You have selected weight gain!");
      this.route.navigateByUrl("/plans/weightgain");
    }
    else{
      alert("You need to be logged in first!");
      this.route.navigateByUrl("/login");
    }
    
  }
 
  //function after selecting musclebuild
  activatemusclebuild(){
    if(this.appservice.globalloggedinuser){
     // alert("You have selected muscle build!");
      this.route.navigateByUrl("/plans/musclebuild");
    }
    else{
      alert("You need to be logged in first!");
      this.route.navigateByUrl("/login");
    }
    
  }

}
