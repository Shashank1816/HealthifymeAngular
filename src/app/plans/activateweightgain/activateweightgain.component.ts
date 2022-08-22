import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/app.service';
import { Diet } from 'src/app/Diet';
import { Plan } from 'src/app/Plan';
import { Workout } from 'src/app/Workout';

@Component({
  selector: 'app-activateweightgain',
  templateUrl: './activateweightgain.component.html',
  styleUrls: ['./activateweightgain.component.css']
})
export class ActivateweightgainComponent implements OnInit {

  constructor(public route: Router, public appservice: AppService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }
  goalentered: number = 0;

  ngOnInit(): void {
  }

  weightgainactivation(content: any) {
    // this.selectedplan.plan_id=3;
    // this.selectedplan.plan_name="weightgain";
    // this.selectedplan.diet=this.diet;
    // this.selectedplan.workout=this.workout;
    // //this.selectedplan.plan_name="weightgain";
    // this.appservice.globalloggedinuser.plan=this.selectedplan;
    // this.appservice.globalloggedinuser.weight_goal=this.goalentered;
    // console.log("inside weightgainactivation ",this.selectedplan);
    // console.log("Inside weightgainactivation - after plan set to user the user is : ",this.appservice.globalloggedinuser);
    // this.appservice.activateplan(this.appservice.globalloggedinuser).subscribe(data=>{
    //   console.log("After getting the response ",data);
    // });

    this.appservice.activateplan(3, this.goalentered).subscribe(data => {
      console.log("Successfully activated Weight Gain Plan", data);
    });

    this.open(content);
  }

  Login() {
    this.appservice.globalloggedinuser = null;
    this.route.navigateByUrl('login');
    this.modalService.dismissAll();
  }
}
