import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../services/facade.service';
import { User } from '../user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public facade: FacadeService, private snackbar: MatSnackBar) { }

  users: User[] = [];

  ngOnInit(): void {
    this.facade.fetch().subscribe(data=>this.users=data);
  }

  deleteUser(_id: string){
    this.facade.delete(_id)
    .subscribe(
      res=>this.snackbar.open(res['msg']),
      err=>this.snackbar.open("No se ha podido eliminar", "Cerrar")
    );
  }

}
