import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
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
export class TableComponent implements OnInit, OnChanges {

  @Input() data: User[] = [];
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>(null);
  columnsToDisplay = ['Nombre', 'Email', 'Edad', 'Género', 'Opciones'];
  expandedElement: User;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['data']){
      this.data = changes['data'].currentValue;
    }
  }

  delete(id, name: string){
    if(window.confirm(`¿Desea eliminar a ${name.toUpperCase()}?`)){
      this.onDelete.emit(id);
    }
  }

}