import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, of, throwError} from 'rxjs';
import { User } from '../user';
import {environment} from '../../../environments/environment';

import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { }

  get users$(): Observable<User[]>{return of(this.users.value)}

  fetch(queryParams?): void {
    this.http.get<User[]>(`${environment.apiUrl}/api/search`, {params: queryParams})
    .subscribe(data=>this.users.next(data), err=>console.error(err));
  } 

  add(body): void {
    this.http.post<User>(`${environment.apiUrl}/api/new`, {...body})
    .subscribe((res: User)=>{
        let newArray = [res, ...this.users.getValue()];
        this.users.next(newArray);
    }, err=>console.error(err));
  }

  delete(_id: string): void{
    this.http.delete(`${environment.apiUrl}/api/${_id}`)
    .subscribe(res=>{
      let array = this.users.getValue().filter(ele=>ele._id !== _id);
      this.users.next(array);
    }, err=>console.error(err));
  }
}
