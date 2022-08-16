import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseURL = "localhost:8080/"
  constructor(public http: HttpClient) { }


  getUsers(): Observable<User[]> {
    console.log('getPeople' + this.baseURL + 'users')
    return this.http.get<User[]>(this.baseURL + 'users')
  }
}
