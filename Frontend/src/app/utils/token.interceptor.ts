import { HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorsService } from '../services/errors.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private _errorService: ErrorsService
  ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token = localStorage.getItem('myToken')
    let token='';
    // Verifica si estás en el navegador antes de acceder a localStorage
    if (typeof window !== 'undefined' && localStorage) {
      token = localStorage.getItem('myToken') || '';
    }
    
    if (token){
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });}
    
    return next.handle(request).pipe(catchError ((error: HttpErrorResponse) =>{
      if (error.status == 401){
        this._errorService.messageError(error)
        this.router.navigate(['/logIn'])
      }
      return throwError( () => error)
    }));
  }

}
