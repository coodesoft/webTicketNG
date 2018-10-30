import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  public superDestacadasLoaded = new BehaviorSubject<any>([]);

  constructor() { }

  private superDestacadaDummy = [
    {'img':'','title':'Transformers',     'imgPortada':''},
    {'img':'','title':'Misión imposible', 'imgPortada':''},
    {'img':'','title':'Dragon Ball Z',    'imgPortada':''},
    {'img':'','title':'Relatos Salvajes', 'imgPortada':''},
    {'img':'','title':'Madagascar',       'imgPortada':''}
  ]; // [Test] Datos de prueba para maquetacion

  getSuperDestacadas(){
    this.superDestacadasLoaded.next(this.superDestacadaDummy);
  }
}
