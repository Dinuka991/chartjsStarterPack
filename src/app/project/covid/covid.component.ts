import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CovidService } from '../covid.service';




@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

 

  lineChartData: ChartDataSets[] = [{ data: [330, 600, 260, 700], label: 'Account A' }];
  
  lineChartLabels: Label[] = [];
  chartLabels = [];
  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private covidService: CovidService) { }

  ngOnInit() {

    this.getCovidStatics();

  }

  getCovidStatics(){
    this.covidService.getCovidStatics()
                .subscribe( (data: any ) => {

                   //console.log(data.data.daily_pcr_testing_data);
                  // console.log(data.data.daily_pcr_testing_data.map(a => a.count));
                   const projects = data.data.daily_pcr_testing_data.map(a => a.count);
                   const projects2 = data.data.daily_pcr_testing_data.map(a => a.date);
                   //console.log(projects)
                   projects.forEach(projet=> {
                    
                      //console.log(projects.map((i) => Number(i)));

                      let array = projects.map((i) => Number(i));
                       console.log(array)
                 
                      this.lineChartData = [{ data: [ 149, 174, 143, 164, 128, 131, 152, 108, 136, 155, 224, 219, 250, 311, 295, 324, 394, 353, 376, 287, 397, 393, 609, 431, 342, 465, 548, 710, 522, 702, 642, 650, 774, 1141, 876, 816, 1075, 1869, 1139, 1545, 1397, 1107, 1681, 1636, 1045, 1491, 1147, 1553] , label: 'Account A' }];
                      this.chartLabels = projects2;


                   
                 

                   }
                 
                    );
                    
                  



                          //START: put data in Bar Chart
             
                //{ data: data.daily_pcr_testing_data.map(a => a.count), label: 'Defects' },
              
                  //this.lineChartLabels = data.daily_pcr_testing_data.map(a => a.date);
              //END: put data in Bar Chart

                },
                error => {

                });

  }

}


