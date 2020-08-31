import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  setCredentials(name) {
    window.sessionStorage.setItem('name', name);
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

  setToken(newToken){
    window.sessionStorage.setItem('token', newToken);
  }

  getToken(){
    return window.sessionStorage.getItem('token');
  }

}
