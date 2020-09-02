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


  add(body) {
    console.log(body);
    //return this.http.post();
  }


  delete(_id: string): Observable<any>{
    let params = new HttpParams().append('id', _id);
    return this.http.delete(`${environment.apiUrl}/api`, {params: params});
  }
}
