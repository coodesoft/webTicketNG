import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrivacidadPageComponent } from './pages/privacidad-page/privacidad-page.component';
import { TermsyCondPageComponent } from './pages/termsy-cond-page/termsy-cond-page.component';
import { NotFoundComponent }       from './pages/not-found/not-found.component';
import { SearchComponent }         from './pages/search/search.component';

const routes: Routes = [
  { path: 'privacidad',      component: PrivacidadPageComponent },
  { path: 'terminos',        component: TermsyCondPageComponent },
  { path: "404",             component: NotFoundComponent },
  { path: "search/:t",       component: SearchComponent },
  { path: "**",              redirectTo: "/404" },
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
