import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  mesDen:any  = ['Enero','Febrero','Marzo','Abril','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  anio:number = 2018;
  mes:number  = 11;
  hoy:Date    = new Date();

  daysAbr:any = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  semanas:any = [

  ];

  constructor() { }

  ngOnInit() {
    
  }

}
