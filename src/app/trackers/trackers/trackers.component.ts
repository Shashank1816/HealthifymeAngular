import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.css']
})
export class TrackersComponent implements OnInit {

  constructor(public route:Router,public appservice:AppService) { }

  ngOnInit(): void {
  }

  afterclickwater(){
    if(this.appservice.globalloggedinuser){
      this.route.navigateByUrl("/trackers/water");
    }
    else
    {
      this.route.navigateByUrl("/login");
      alert("You need to be logged in first");
    }
    
  }
  afterclickcalorie(){
    if(this.appservice.globalloggedinuser){
      this.route.navigateByUrl("/trackers/calorie");
    }
    else{
      this.route.navigateByUrl("/login");
      alert("You need to be logged in first!");
    }
  }
  afterclickweight(){
    if(this.appservice.globalloggedinuser){
      this.route.navigateByUrl("/trackers/weight");
    }
    else{
      this.route.navigateByUrl("/login");
      alert("You need to be logged in first");
    }
    
  }
}
