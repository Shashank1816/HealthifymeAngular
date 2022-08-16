import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseURL = "http://localhost:8080/"
  constructor(private http: HttpClient, private route: Router) { }


  getUsers(): Observable<User[]> {
    console.log('getPeople' + this.baseURL + 'users')
    return this.http.get<User[]>(this.baseURL + 'users')
  }

  //service for registering a user
  registerUser(user: User): Observable<any> {
    console.log("Inside the register user post request");
    return this.http.post(this.baseURL + 'users', user);
    // this.route.navigateByUrl("/profilepage");
  }
}
