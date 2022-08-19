import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Water } from 'src/app/Water';

@Component({
  selector: 'app-watertracker',
  templateUrl: './watertracker.component.html',
  styleUrls: ['./watertracker.component.css']
})
export class WatertrackerComponent implements OnInit {

  constructor(public appservice:AppService) { }


  date : any;
  glasses:any;

  currentwaterdata =new Water;
  ngOnInit(): void {
  }
  watersubmit(){
    console.log(this.date+" and glasses is "+ this.glasses + " global user is "+ this.appservice.globalloggedinuser.name );
    this.currentwaterdata.date=this.date;
    this.currentwaterdata.water_count=this.glasses;
    this.currentwaterdata.user=this.appservice.globalloggedinuser;
    console.log("the currentwaterdata is ",this.currentwaterdata);
    this.appservice.sumbitwaterinfo(this.currentwaterdata).subscribe(data=>{
      console.log("inside watersubmit after sending the request and getting some response ",data);
    }
      );

  }

}
