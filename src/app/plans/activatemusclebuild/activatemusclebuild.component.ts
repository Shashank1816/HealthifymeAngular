import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/app.service';
import { Diet } from 'src/app/Diet';
import { Plan } from 'src/app/Plan';
import { Workout } from 'src/app/Workout';

@Component({
  selector: 'app-activatemusclebuild',
  templateUrl: './activatemusclebuild.component.html',
  styleUrls: ['./activatemusclebuild.component.css']
})
export class ActivatemusclebuildComponent implements OnInit {

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

  musclebuildactivation(content: any) {
    // this.selectedplan.plan_id=2;
    // this.selectedplan.plan_name="musclebuild";
    // this.selectedplan.diet=this.diet;
    // this.selectedplan.workout=this.workout;
    // //this.selectedplan.plan_name="weightgain";
    // this.appservice.globalloggedinuser.plan=this.selectedplan;
    // this.appservice.globalloggedinuser.weight_goal=this.goalentered;
    // console.log("inside musclebuildactivation ",this.selectedplan);
    // console.log("Inside musclebuildactivation - after plan set to user the user is : ",this.appservice.globalloggedinuser);
    // this.appservice.activateplan(this.appservice.globalloggedinuser).subscribe(data=>{
    //   console.log("After getting the response inside musclebuildactivation ",data);
    // });

    this.appservice.activateplan(2, this.goalentered).subscribe(data => {
      console.log("Successfully activated Muscle Build Plan", data);
    });

    this.open(content);
  }

  Login() {
    this.appservice.globalloggedinuser = null;
    this.route.navigateByUrl('login');
    this.modalService.dismissAll();
  }

}
