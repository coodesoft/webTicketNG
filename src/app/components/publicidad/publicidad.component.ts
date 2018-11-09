import { Component, OnInit, OnDestroy } from '@angular/core';

import { PublicidadService } from './../../providers/publicidad.service';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  dataPubli:any = [];

  private subscripcion;

  constructor(
  	private publis: PublicidadService
  ) { }

  ngOnInit() {
  	this.publis.getPublicidades();
  	this.subscripcion = this.publis.publicidadLoaded.subscribe({  next: (r) => { this.dataPubli = r; } });
  }

}
