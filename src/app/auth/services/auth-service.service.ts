import { Injectable } from '@angular/core';
import {RegisterRequestInterface} from "../types/register-interface";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../shared/types/current-user";
import {HttpClient} from "@angular/common/http";
import {AuthResponseInterface} from "../types/auth-response-interface";
import {LoginRequestInterface} from "../types/login-interface";

@Injectable()
export class AuthService {
  getUser(data:AuthResponseInterface):CurrentUserInterface{
    return data.user
  }
  register(data:RegisterRequestInterface):Observable<CurrentUserInterface>{
   const url=environment.apiUrl+'/users'
    return this.http.post<AuthResponseInterface>(url,data).pipe(map(this.getUser))

  }

  login(data:LoginRequestInterface):Observable<CurrentUserInterface>{
    const url=environment.apiUrl+'/users/login'
    return this.http.post<AuthResponseInterface>(url,data).pipe(map(this.getUser))

  }
  getCurrentUser():Observable<CurrentUserInterface>{
    const url=environment.apiUrl+'/user'
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser));
  }
  constructor(private http:HttpClient) { }
}
