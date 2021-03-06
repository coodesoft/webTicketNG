import { Component, OnInit }   from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

//import { UserService } from './../../providers/user.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(
  //  private us:     UserService,
    private router: Router
  ){}

  registrado = false;

  userName:string = '';

  enlaces:any=[
  ];

  ngOnInit() {
    /*this.us.onLogin.subscribe({ next: (v) => { this.actualizaEstado(); } });
    this.us.onLogOut.subscribe({ next: (v) => { this.actualizaEstado(); } });*/

    this.router.events.subscribe((e) => {
      if(e instanceof RouterEvent){
        if (e.url == '/select-plan' || e.url == '/update-plan'){

        } else {

        }
      }
    });
  }

  actualizaEstado(){
    /*this.registrado = this.us.logeado();
    if(this.registrado) {
      this.userName   = this.us.getName();
    }*/
  }

  logOut(){ // [Revisar] si estructuralmente seria correcto dejar esto opr aca
   // this.us.logOut();
  }
}
