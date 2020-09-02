import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { User } from '../user';
import {environment} from '../../../environments/environment';

import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private http: HttpClient) { }

  fetch(queryParams?): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/api/search`, {params: queryParams});
  } 


  add(body): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/new`, {...body});
  }


  delete(_id: string): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/api/${_id}`);
  }
}
