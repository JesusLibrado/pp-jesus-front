import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Builder } from 'protractor';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      maxWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result`, result);
    });
  }

}
