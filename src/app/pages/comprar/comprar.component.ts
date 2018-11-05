import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Publicacion } from '../../models/publicacion';

import { PublicacionService } from './../../providers/publicacion.service';
import { CompraService }      from './../../providers/compra.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  public publicacion:Publicacion = new Publicacion();

  private subscripcion;

  constructor(
    private activatedRoute: ActivatedRoute,
    private compra:         CompraService,
    private publicacionS:   PublicacionService
  ) { }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.publicacionS.getPublicacionData(id);
    this.subscripcion = this.publicacionS.publicacionLoaded.subscribe({  next: (r) => { this.publicacion = <Publicacion>r; } });
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }
}
