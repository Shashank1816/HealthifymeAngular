import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseURL = "http://localhost:8080/"
  constructor(public http: HttpClient) { }

  globalloggedinuser : User | undefined;//currently logged in user


  //to get all the users
  getUsers(): Observable<User[]> {
    console.log('getPeople' + this.baseURL + 'users')
    return this.http.get<User[]>(this.baseURL + 'users')
  }


  //to send a post request for login 
  loginUser(email:string,password:string):Observable<any>{
    const headers = {'content-type' : 'application/json'}
    const body = JSON.stringify({email,password});
    console.log("[Inside appservice]This is the data we are sending to spring" + body);
    return this.http.post<User[]>(this.baseURL + 'loginuser',body,{'headers':headers})
    
  }

 

}
