import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AppUrl : string;
  private APIUrl : string;

  constructor(private Http:HttpClient) { 
    this.AppUrl = environment.TSEURL
    this.APIUrl = 'api/user'
  }
 
 sigIn(user: User): Observable<any>{ //<any> por que no sabemos que datos vamos a traer
  return this.Http.post(`${this.AppUrl}${this.APIUrl}/register`,user)
 }

 logIn(user: User): Observable<string>{
  return this.Http.post<string>(`${this.AppUrl}${this.APIUrl}/login`,user)
 }
}

