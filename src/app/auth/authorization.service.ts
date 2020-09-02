import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

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

  getCredentials(){
    return window.sessionStorage.getItem('name');
  }

  isLogged() {
    return window.sessionStorage.getItem('token') !== '' && window.sessionStorage.getItem('token') !== null;
  }

  logout(){
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('name');
  }

  getToken(){
    return window.sessionStorage.getItem('token');
  }

  private setCredentials(token, name){
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('name', name);
  }

}
