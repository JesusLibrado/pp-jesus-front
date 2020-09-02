import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { FacadeService } from '../services/facade.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private facade: FacadeService,
    private snackbar: MatSnackBar
  ) { }

  private sub: Subscription;
  

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      maxWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.facade.add(result).subscribe(res=>this.snackbar.open('Registro exitoso', 'Cerrar'), err=>console.error(err));
    }, err=>console.error(err));
  }

}
