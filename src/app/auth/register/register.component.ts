import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private appservice: AppService, private route:Router) { }

  ngOnInit(): void {
  }

  user : User = new User;

  password: string | undefined;
  confirmPassword: string | undefined;

  checkPassword() {
    console.log("checking password");
    if (this.password != this.confirmPassword) {
      alert("Passwords mismatch");
      return;
    }
    this.user.password = this.password;
    this.user.gender = "M"; //need to change this
    console.log(this.user);
    this.appservice.registerUser(this.user).subscribe(data => {
      console.log("Successfully registered!");
    });
    // console.log(res);
  }
}
