import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public facade: FacadeService) { }

  ngOnInit(): void {
    this.facade.fetch().subscribe(data=>console.log(data));
  }

}
