import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string = "http://localhost4000/users";
  constructor(private httpClient : HttpClient) { }

  signup(user){
return this.httpClient.post(`${this.userURL}/signup`,user);

  }
  login(user){
    return this.httpClient.post<{message:string}>(`${this.userURL}/login`,user)
    
  }
}