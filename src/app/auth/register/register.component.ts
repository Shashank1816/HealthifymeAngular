import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Plan } from 'src/app/Plan';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private appservice: AppService) { }

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
