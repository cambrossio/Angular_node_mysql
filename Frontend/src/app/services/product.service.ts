import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private AppUrl : string;
  private APIUrl : string;

  constructor(private http:HttpClient) { 
    this.AppUrl = environment.TSEURL
    this.APIUrl = 'api/product'
  }
 
 getProduct(): Observable<product[]>{      
  return this.http.get<product[]>(`${this.AppUrl}${this.APIUrl}/getAllProducts`)

    //FORMA DE TRAER LA LISTA DE PRODUCTOS SIN UTILIZAR EL INTERCEPTOR
    //const token = localStorage.getItem('myToken')
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    //return this.http.get<product[]>(`${this.AppUrl}${this.APIUrl}/getAllProducts`, {headers: headers})
 }
  
}
