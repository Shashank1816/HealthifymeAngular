import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.css']
})
export class TrackersComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  afterclickwater(){
    this.route.navigateByUrl("/trackers/water");
  }
  afterclickcalorie(){
    this.route.navigateByUrl("/trackers/calorie");
  }
  afterclickweight(){
    this.route.navigateByUrl("/trackers/weight");
  }
}
