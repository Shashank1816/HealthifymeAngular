import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.css']
})
export class TrackersComponent implements OnInit {


  constructor(public route: Router, public appservice: AppService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

  Login() {
    this.route.navigateByUrl('login');
    this.modalService.dismissAll();
  }

  afterclickwater(content: any) {
    if (this.appservice.globalloggedinuser) {
      this.route.navigateByUrl("/trackers/water");
    }
    else {
      this.modalService.open(content);
    }
  }
  afterclickcalorie(content: any) {
    if (this.appservice.globalloggedinuser) {
      this.route.navigateByUrl("/trackers/calorie");
    }
    else {
      this.modalService.open(content);
    }
  }
  afterclickweight(content: any) {
    if (this.appservice.globalloggedinuser) {
      this.route.navigateByUrl("/trackers/weight");
    }
    else {
      this.modalService.open(content);
    }

  }
}
