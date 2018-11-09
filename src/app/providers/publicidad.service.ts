import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

	public publicidadLoaded = new BehaviorSubject<any>([]);

	private dummyData = [
		{'text':'Banner', 'img':''},
		{'text':'Banner', 'img':''}
	];

  	constructor() { }

  	getPublicidades(){
  		this.publicidadLoaded.next(this.dummyData);
  	}
}
