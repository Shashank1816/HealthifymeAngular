import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-buyplancard',
  templateUrl: './buyplancard.component.html',
  styleUrls: ['./buyplancard.component.css']
})
export class BuyplancardComponent implements OnInit {

  constructor(public appservice: AppService, public route: Router) { }

  currentuser = this.appservice.globalloggedinuser;

  activeplan = this.currentuser.plan ==null ? "none" : this.currentuser.plan;
  ngOnInit(): void {
  }
  gototrackers(){
    this.route.navigateByUrl("trackers");
  }

}
