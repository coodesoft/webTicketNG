import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntuacion-ctrl',
  templateUrl: './puntuacion-ctrl.component.html',
  styleUrls: ['./puntuacion-ctrl.component.css']
})
export class PuntuacionCtrlComponent implements OnInit {

  puntuacion:number = 9;
  estrellas:any     = [1,1,1,1,1,1,1,1,1,0];

  constructor() { }

  ngOnInit() {
    this.setEstrellas();
  }

  setEstrellas(){
    for(let c=0; c<10; c++){
      if(c < this.puntuacion) { this.estrellas[c]=1; } else { this.estrellas[c]=0; }
    }
  }

  mouseEnter(i){
    for(let c=0; c<(i+1); c++){
      this.estrellas[c]=2;
    }
  }

  mouseLeave(i){
    this.setEstrellas();
  }

  click(i){

  }
}
