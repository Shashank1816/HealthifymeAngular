import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Weight } from 'src/app/Weight'

@Component({
  selector: 'app-weighttracker',
  templateUrl: './weighttracker.component.html',
  styleUrls: ['./weighttracker.component.css']
})
export class WeighttrackerComponent implements OnInit {

  constructor(public appservice : AppService) { }

  weightdata = new Weight;
  enteredweight :any;
  date:any;
  ngOnInit(): void {
  }
  submitweightdata(){
    console.log("Entered weight and date is ",this.enteredweight," and ",this.date);
    this.weightdata.date=this.date;
    this.weightdata.user=this.appservice.globalloggedinuser;
    this.weightdata.weight=this.enteredweight;
    console.log("The value of weight data object is ",this.weightdata);
    this.appservice.submitweightinfo(this.weightdata).subscribe(data=>{
      console.log("inside Weightsubmit after sending the request and getting some response ",data);
    }
      );

  }

}
