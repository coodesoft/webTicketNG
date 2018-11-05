import { Component, OnInit, OnDestroy } from '@angular/core';

import { PublicacionService } from './../../providers/publicacion.service';
import { CompraService }      from './../../providers/compra.service';

@Component({
  selector: 'app-slider-encabezado',
  templateUrl: './slider-encabezado.component.html',
  styleUrls: ['./slider-encabezado.component.css']
})
export class SliderEncabezadoComponent implements OnInit {

  private subscripcion;
  private dataPubli;

  constructor(
    private publicacion:PublicacionService,
    private comprar:CompraService
  ) { }

  ngOnInit() {
    this.publicacion.getSuperDestacadas();
    this.subscripcion = this.publicacion.superDestacadasLoaded.subscribe({  next: (r) => { this.dataPubli = r; } });
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

  goToCompra(id){
    this.comprar.goToCompra(id);
  }

}
