import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  public superDestacadasLoaded = new BehaviorSubject<any>([]);
  public destacadasLoaded      = new BehaviorSubject<any>([]);

  constructor() { }

  private superDestacadaDummy = [
    {'id':1, 'img':'','title':'Transformers',     'imgPortada':''},
    {'id':2, 'img':'','title':'Misión imposible', 'imgPortada':''},
    {'id':3, 'img':'','title':'Dragon Ball Z',    'imgPortada':''},
    {'id':4, 'img':'','title':'Relatos Salvajes', 'imgPortada':''},
    {'id':5, 'img':'','title':'Madagascar',       'imgPortada':''}
  ]; // [Test] Datos de prueba para maquetacion

  private destacadaDummy = [
    {'id':1, 'img':'','title':'Transformers',     'imgPortada':''},
    {'id':2, 'img':'','title':'Misión imposible', 'imgPortada':''},
    {'id':3, 'img':'','title':'Dragon Ball Z',    'imgPortada':''},
    {'id':4, 'img':'','title':'Relatos Salvajes', 'imgPortada':''},
    {'id':5, 'img':'','title':'Madagascar',       'imgPortada':''}
  ]; // [Test] Datos de prueba para maquetacion


  getSuperDestacadas(){
    this.superDestacadasLoaded.next(this.superDestacadaDummy);
  }

  getDestacadas(){
    this.destacadasLoaded.next(this.destacadaDummy);
  }
}
