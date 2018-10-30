import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  public superDestacadasLoaded = new BehaviorSubject<any>([]);

  constructor() { }

  private superDestacadaDummy = [
    {'img':'','title':'Transformers'},
    {'img':'','title':'Misión imposible'},
    {'img':'','title':'Dragon Ball Z'},
    {'img':'','title':'Relatos Salvajes'},
    {'img':'','title':'Madagascar'}
  ]; // [Test] Datos de prueba para maquetacion

  getSuperDestacadas(){
    this.superDestacadasLoaded.next(this.superDestacadaDummy);
  }
}
