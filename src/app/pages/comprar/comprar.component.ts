import { Component, OnInit } from '@angular/core';

import { Publicacion } from '../../models/publicacion';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  public publicacion = new Publicacion();

  constructor() { }

  ngOnInit() {
  }
}
