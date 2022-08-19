import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Diet } from './Diet';
import { Workout } from './Workout';
import { Plan } from './Plan';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseURL = "http://localhost:8080/"
  constructor(private http: HttpClient, private route: Router) { }

  globalloggedinuser: any;//currently logged in user


  //to get all the users
  getUsers(): Observable<User[]> {
    console.log('getPeople' + this.baseURL + 'users')
    return this.http.get<User[]>(this.baseURL + 'users')
  }


  //to send a post request for login 
  loginUser(email: string, password: string): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify({ email, password });
    console.log("[Inside appservice]This is the data we are sending to spring" + body);
    return this.http.post<User[]>(this.baseURL + 'login', body, { 'headers': headers })

  }



  //service for registering a user
  registerUser(user: User): Observable<any> {
    console.log("Inside the register user post request");
    return this.http.post(this.baseURL + 'users', user);
    // this.route.navigateByUrl("/profilepage");
  }

  getDiet(dietId: number): Observable<Diet> {
    return this.http.get<Diet>(this.baseURL + 'diets/' + dietId);
  }

  getWorkout(workoutId: number): Observable<Workout> {
    return this.http.get<Workout>(this.baseURL + 'workouts/' + workoutId);
  }

  getPlan(plan_id: number): Observable<Plan> {
    return this.http.get<Plan>(this.baseURL + 'plans/' + plan_id);
  }
}
