import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrivacidadPageComponent } from './pages/privacidad-page/privacidad-page.component';
import { TermsyCondPageComponent } from './pages/termsy-cond-page/termsy-cond-page.component';
import { NotFoundComponent }       from './pages/not-found/not-found.component';
import { SearchComponent }         from './pages/search/search.component';

import { HomeComponent }      from './pages/home/home.component';
import { ContactoComponent }  from './pages/contacto/contacto.component';
import { EventosComponent }   from './pages/eventos/eventos.component';
import { SmartpassComponent } from './pages/smartpass/smartpass.component';
import { ComprarComponent }   from './pages/comprar/comprar.component';

const routes: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'home',        component: HomeComponent },
  { path: 'events',      component: EventosComponent },
  { path: 'contact',     component: ContactoComponent },
  { path: 'smart-pass',  component: SmartpassComponent },
  { path: 'privacidad',  component: PrivacidadPageComponent },
  { path: 'comprar/:id', component: ComprarComponent },
  { path: 'terminos',    component: TermsyCondPageComponent },
  { path: "404",         component: NotFoundComponent },
  { path: "search/:t",   component: SearchComponent },
  { path: "**",          redirectTo: "/404" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
