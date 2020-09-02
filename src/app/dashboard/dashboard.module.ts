import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DashboardRoutingModule } from './dashboard.routing';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddComponent } from './add/add.component';
import { FormComponent } from './add/form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { FiltersComponent } from './filters/filters.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [DashboardComponent, TableComponent, AddComponent, FormComponent, FiltersComponent],
  imports: [
    MatDividerModule,
    MatGridListModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule, 
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    CommonModule
  ],
  providers: [
    
  ]
})
export class DashboardModule { }
