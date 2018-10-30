//[Modificar] los sliders seguramente se puedan generalizar
import { Component, OnInit, OnDestroy } from '@angular/core';

import { PublicacionService } from './../../providers/publicacion.service';


@Component({
  selector: 'app-slider-resaltados',
  templateUrl: './slider-resaltados.component.html',
  styleUrls: ['./slider-resaltados.component.css']
})
export class SliderResaltadosComponent implements OnInit {

  private subscripcion;
  private dataPubli;


  constructor(
  	private publicacion:PublicacionService
  ) { }

  ngOnInit() {
    this.publicacion.getDestacadas();
    this.subscripcion = this.publicacion.destacadasLoaded.subscribe({  next: (r) => { this.dataPubli = r; } });
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

}
