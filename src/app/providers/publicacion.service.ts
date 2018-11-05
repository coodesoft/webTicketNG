import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  public superDestacadasLoaded = new BehaviorSubject<any>([]);
  public destacadasLoaded      = new BehaviorSubject<any>([]);
  public publicacionLoaded     = new BehaviorSubject<any>([]);

  constructor() { }

  private superDestacadaDummy = [
    {'id':1, 'img':'assets/test/matrix2.jpg','title':'Matrix',     'imgPortada':'assets/test/matrix1.jpg',
    'argumento':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.'},
    {'id':2, 'img':'assets/test/mision2.jpg','title':'Misión imposible', 'imgPortada':'assets/test/mision1.jpg',
    'argumento':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.'},
    {'id':3, 'img':'assets/test/dragon2.jpg','title':'Dragon Ball Z',    'imgPortada':'assets/test/dragon1.jpg',
    'argumento':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.'},
    {'id':4, 'img':'assets/test/relato2.jpg','title':'Relatos Salvajes', 'imgPortada':'assets/test/relato1.jpg',
    'argumento':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.'},
    {'id':5, 'img':'assets/test/mada2.jpg','title':'Madagascar 2',     'imgPortada':'assets/test/mada1.jpg',
    'argumento':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique lacus. Nunc sit amet varius metus. Donec commodo sed ipsum nec varius. Cras non sem non massa pulvinar euismod. Nam rutrum ultricies tellus sed dictum. Maecenas porta, libero eu luctus molestie, velit ipsum ultrices quam, a suscipit nisl odio at risus. Donec nec sem a eros aliquam condimentum.'}
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

  getPublicacionData(id){
    let data:any = [];
    for (let item of this.superDestacadaDummy){
      if (item.id == id){
        data = item;
      }
    }

    this.publicacionLoaded.next(data);
  }
}
