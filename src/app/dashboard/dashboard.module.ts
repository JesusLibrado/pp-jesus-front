import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DashboardRoutingModule } from './dashboard.routing';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [DashboardComponent, TableComponent],
  imports: [
    MatPaginatorModule,
    MatTableModule, 
    MatIconModule,
    MatToolbarModule,
    DashboardRoutingModule,
    
    CommonModule
  ]
})
export class DashboardModule { }
