import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  //if we click on login button the url should change to /login
  routelogin(){
    this.router.navigateByUrl("/login");
  }
  routeregister(){
    this.router.navigateByUrl("/register");
  }
  routeforgotpass(){
    this.router.navigateByUrl("/forgotpass");
  }

}
