import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { CovidComponent } from './covid.component';
import { CovidService } from '../covid.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule,
    ChartsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule

  ],
  exports: [
    MatPaginatorModule ],

providers: [CovidService , ThemeService ]
})
export class CovidModule { }
