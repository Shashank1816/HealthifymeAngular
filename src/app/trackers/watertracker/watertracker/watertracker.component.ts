import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/app.service';
import { Water } from 'src/app/Water';

@Component({
  selector: 'app-watertracker',
  templateUrl: './watertracker.component.html',
  styleUrls: ['./watertracker.component.css']
})
export class WatertrackerComponent implements OnInit {

  constructor(public route: Router, public appservice: AppService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  date: any;
  glasses: any;

  currentwaterdata = new Water;
  ngOnInit(): void {
  }
  watersubmit(content: any) {
    console.log(this.date + " and glasses is " + this.glasses + " global user is " + this.appservice.globalloggedinuser.name);
    this.currentwaterdata.date = this.date;
    this.currentwaterdata.water_count = this.glasses;
    this.currentwaterdata.user = this.appservice.globalloggedinuser;
    console.log("the currentwaterdata is ", this.currentwaterdata);
    this.appservice.sumbitwaterinfo(this.currentwaterdata).subscribe(data => {
      console.log("inside watersubmit after sending the request and getting some response ", data);
    });
    this.modalService.open(content);
  }

}
