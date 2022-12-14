import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Diet } from './Diet';
import { Workout } from './Workout';
import { Plan } from './Plan';
import { Water } from './Water';
import { Weight } from './Weight';
import { Calorie } from './Calorie';


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

  //service for posting weight info coming from a particular user
  submitweightinfo(weight: Weight): Observable<any> {
    console.log("Inside submitweightinfo service");
    return this.http.post(this.baseURL + 'trackers/weight', weight);
  }

  getWorkout(workoutId: number): Observable<Workout> {
    return this.http.get<Workout>(this.baseURL + 'workouts/' + workoutId);
  }

  getPlan(plan_id: number): Observable<Plan> {
    return this.http.get<Plan>(this.baseURL + 'plans/' + plan_id);
  }

  //service for posting water info coming from a particular user
  sumbitwaterinfo(water: Water): Observable<any> {
    console.log("Inside submitwaterinfo service request");
    return this.http.post(this.baseURL + 'trackers/water', water);
  }

  //service for posting calorie info coming form a particular user
  submitcalorieinfo(calorie: Calorie): Observable<any> {
    console.log("Inside submitcalorieinfo service request");
    return this.http.post(this.baseURL + 'trackers/calorie', calorie);
  }




  //service for activating plan
  activateplan(plan_id: number, goal: number): Observable<any> {
    console.log("inside activate plan service");
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify({ plan_id, goal });
    console.log(body);
    return this.http.put(this.baseURL + 'users/' + this.globalloggedinuser.user_id, body, { headers });
  }


  //API

  private API_Base_url = "https://api.edamam.com/api/food-database/v2/parser?app_id=42c0cf1e&app_key=1854358d09753492a01854797a61183e&ingr=";
  //service for getting calorie info of food
  getcalorieinfo(food: string): Observable<any> {
    console.log("inside getcalorieinfo")
    return this.http.get<any>(this.API_Base_url + food);
  }

  //service for getting the users weight tracker entries
  getUsersWeightList():Observable<any>{
    return this.http.get<Weight[]>(this.baseURL + 'users/' + this.globalloggedinuser.user_id+ '/weight');
  }

  //service for getting the users water tracker entries
  getUsersWaterList():Observable<any>{
    return this.http.get<Water[]>(this.baseURL+ 'users/' + this.globalloggedinuser.user_id + '/water') ;
  }

  //service for gettng the users calorie tracker entries
  getUsersCalorieList():Observable<any>{
    return this.http.get<Calorie[]>(this.baseURL+'users/' + this.globalloggedinuser.user_id + '/calorie');
  }
}

