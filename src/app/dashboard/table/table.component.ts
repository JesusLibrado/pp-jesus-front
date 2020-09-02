import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FacadeService } from '../services/facade.service';
import { User } from '../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  @Input() data: User[] = [];

  columnsToDisplay = ['Nombre', 'Email', 'Edad', 'Género', 'Opciones'];
  expandedElement: User;

  constructor() { }

  ngOnInit(): void {
  }

  delete(id){
    console.log(id);
  }

}