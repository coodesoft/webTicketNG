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
    {'id':1, 'img':'assets/test/matrix2.jpg','title':'Matrix',     'imgPortada':'assets/test/matrix1.jpg'},
    {'id':2, 'img':'assets/test/mision2.jpg','title':'Misión imposible', 'imgPortada':'assets/test/mision1.jpg'},
    {'id':3, 'img':'assets/test/dragon2.jpg','title':'Dragon Ball Z',    'imgPortada':'assets/test/dragon1.jpg'},
    {'id':4, 'img':'assets/test/relato2.jpg','title':'Relatos Salvajes', 'imgPortada':'assets/test/relato1.jpg'},
    {'id':5, 'img':'assets/test/mada2.jpg','title':'Madagascar 2',     'imgPortada':'assets/test/mada1.jpg'}
  ]; // [Test] Datos de prueba para maquetacion

  private destacadaDummy = [
    {'id':1, 'img':'','title':'Transformers',     'imgPortada':''},
    {'id':2, 'img':'','title':'Misión imposible', 'imgPortada':'test/mision1.jpg'},
    {'id':3, 'img':'','title':'Dragon Ball Z',    'imgPortada':''},
    {'id':4, 'img':'','title':'Relatos Salvajes', 'imgPortada':''},
    {'id':5, 'img':'test/mada2.jpg','title':'Madagascar 2',     'imgPortada':'test/mada1.jpg'}
  ]; // [Test] Datos de prueba para maquetacion


  getSuperDestacadas(){
    this.superDestacadasLoaded.next(this.superDestacadaDummy);
  }

  getDestacadas(){
    this.destacadasLoaded.next(this.superDestacadaDummy);
  }
}
