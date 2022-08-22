import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/app.service';
import { Weight } from 'src/app/Weight'

@Component({
  selector: 'app-weighttracker',
  templateUrl: './weighttracker.component.html',
  styleUrls: ['./weighttracker.component.css']
})
export class WeighttrackerComponent implements OnInit {

  constructor(public route: Router, public appservice: AppService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  weightdata = new Weight;
  enteredweight :any;
  date:any;
  ngOnInit(): void {
  }
  submitweightdata(content:any){
    console.log("Entered weight and date is ",this.enteredweight," and ",this.date);
    this.weightdata.date=this.date;
    this.weightdata.user=this.appservice.globalloggedinuser;
    this.weightdata.weight=this.enteredweight;
    console.log("The value of weight data object is ",this.weightdata);
    this.appservice.submitweightinfo(this.weightdata).subscribe(data=>{
      console.log("inside Weightsubmit after sending the request and getting some response ",data);
    });
    this.modalService.open(content);
  }

}
