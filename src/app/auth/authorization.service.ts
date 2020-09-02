import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient, private router: Router) { }

  private errorHandler(error: HttpErrorResponse){
    return throwError("Verifica que los datos sean correctos");
  }

  authorize({code, name}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth`, {
      code: code, name: name
    }).pipe(map(res=>{
        this.setCredentials(res['token'], res['name']);
        return true;
    }), catchError(this.errorHandler));
  }

  get credentials(): Observable<string>{
    return of(window.sessionStorage.getItem('name'));
  }

  isLogged() {
    return window.sessionStorage.getItem('token') !== '' && window.sessionStorage.getItem('token') !== null;
  }

  logout(){
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('name');
    this.router.navigateByUrl('/sign-in');
  }

  getToken(){
    return window.sessionStorage.getItem('token');
  }

  private setCredentials(token, name){
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('name', name);
  }

}
