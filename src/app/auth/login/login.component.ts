import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login credentials
  uname="";
  pass="";
  loggedinuser : User | undefined;
  constructor(public route:Router,public appservice:AppService) { }

  ngOnInit(): void {
    console.log("Login Component Activated")
  }

  login(){
    console.log("inside login function "+ this.uname, this.pass);
    this.appservice.loginUser(this.uname,this.pass).subscribe(data=>{
      console.log("Inside login function after getting data ",data)
      this.loggedinuser = data;
      console.log ("The current logged in user is ",this.loggedinuser);
      this.appservice.globalloggedinuser=this.loggedinuser;
      console.log("Current Global loggedin user is ",this.appservice.globalloggedinuser);
      if(this.loggedinuser){
        //login successful
        this.route.navigateByUrl("/");
      }
      else{
        //login failed
        alert("Wrong ID or password");
      }
    });
  }


  

  // routeregister(){
  //   this.route.navigateByUrl("/register");
  // }
  // routeforgotpass(){
  //   this.route.navigateByUrl("/forgotpass");
  // }

}
