import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { CovidComponent } from './covid.component';
import { CovidService } from '../covid.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule,
    ChartsModule,
    HttpClientModule

  ],

providers: [CovidService , ThemeService ]
})
export class CovidModule { }
