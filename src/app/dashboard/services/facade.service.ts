import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from '../user';
import {environment} from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private http: HttpClient) { }

  fetch(queryParams?): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl);
  } 
}
