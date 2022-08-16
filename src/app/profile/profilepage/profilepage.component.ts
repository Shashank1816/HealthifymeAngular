import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  constructor(private appservice : AppService) { }

  ngOnInit(): void {
    this.refreshPeople();
    console.log("ng init working");
  }

  users: User[] = [];

  refreshPeople(){
    this.appservice.getUsers().subscribe(data=>{
      console.log(data)
      this.users=data;
    })
  }

}
