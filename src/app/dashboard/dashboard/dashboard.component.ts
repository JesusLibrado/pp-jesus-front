import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';
import { User } from '../user';
import { AuthorizationService } from 'src/app/auth/authorization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public facade: FacadeService, public auth: AuthorizationService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.facade.fetch();
  }

  deleteUser(_id: string){
    this.facade.delete(_id);
  }

}
