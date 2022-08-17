import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //just to check whether click is working or not.
  afterclick(){
    alert("Click is working");
  }
}
