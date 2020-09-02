import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { FacadeService } from '../services/facade.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private facade: FacadeService
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      maxWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result =>this.facade.add(result));
  }

}
