import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-encabezado',
  templateUrl: './img-encabezado.component.html',
  styleUrls: ['./img-encabezado.component.css']
})
export class ImgEncabezadoComponent implements OnInit {

  public imgPortada='assets/img/background.jpg';

  constructor() { }

  ngOnInit() {
  }

}
