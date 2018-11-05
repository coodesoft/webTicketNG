import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router }          from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public compraOptionsLoaded = new BehaviorSubject<any>([]);

  public compraOptDummy = [];

  private urlComprarTicket = 'comprar';

  constructor(
    private router: Router
  ) { }

  goToCompra(id){
    this.router.navigate(['./'+this.urlComprarTicket+'/'+id]);
  }

  getCompraOptions(id){
    this.compraOptionsLoaded.next(this.compraOptDummy);
  }
}
