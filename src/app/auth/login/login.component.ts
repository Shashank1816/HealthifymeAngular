import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
    console.log("Login Component Activated")
  }

  routeregister(){
    this.route.navigateByUrl("/register");
  }
  routeforgotpass(){
    this.route.navigateByUrl("/forgotpass");
  }

}
