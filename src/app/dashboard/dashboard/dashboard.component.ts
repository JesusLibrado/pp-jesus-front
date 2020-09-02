import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public facade: FacadeService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.facade.fetch().subscribe(data=>this.users=data);
  }

}
