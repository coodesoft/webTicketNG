import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule }         from '@angular/common/http';
import { FormsModule }              from '@angular/forms';
import { LOCALE_ID }                from '@angular/core';

import { AppComponent }      from './app.component';
import { AppRoutingModule }  from './app-routing.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ConfigService }        from './providers/config.service';
import { CompraService }        from './providers/compra.service';
import { TextsService }         from './providers/texts.service';
import { PublicidadService }    from './providers/publicidad.service';

import { PrivacidadPageComponent } from './pages/privacidad-page/privacidad-page.component';
import { TermsyCondPageComponent } from './pages/termsy-cond-page/termsy-cond-page.component';
import { NotFoundComponent }       from './pages/not-found/not-found.component';
import { SearchComponent }         from './pages/search/search.component';

import { MainMenuComponent }  from './components/main-menu/main-menu.component';
import { FooterComponent }    from './components/footer/footer.component';
import { AlertComponent }     from './components/alert/alert.component';

import { registerLocaleData } from '@angular/common';
import localeEs               from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { HomeComponent }      from './pages/home/home.component';
import { ContactoComponent }  from './pages/contacto/contacto.component';
import { EventosComponent }   from './pages/eventos/eventos.component';
import { SmartpassComponent } from './pages/smartpass/smartpass.component';

import { DetalleComponent }          from './pages/publicacion/detalle/detalle.component';
import { SliderResaltadosComponent } from './components/slider-resaltados/slider-resaltados.component';
import { CategorizadosComponent }    from './components/categorizados/categorizados.component';
import { PublicidadComponent }       from './components/publicidad/publicidad.component';
import { OfertasComponent }          from './components/ofertas/ofertas.component';
import { SliderEncabezadoComponent } from './components/slider-encabezado/slider-encabezado.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { ImgEncabezadoComponent } from './components/img-encabezado/img-encabezado.component';
import { PuntuacionCtrlComponent } from './components/puntuacion-ctrl/puntuacion-ctrl.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
    PrivacidadPageComponent,
    TermsyCondPageComponent,
    NotFoundComponent,
    SearchComponent,
    AlertComponent,
    HomeComponent,
    ContactoComponent,
    EventosComponent,
    SmartpassComponent,
    DetalleComponent,
    SliderResaltadosComponent,
    CategorizadosComponent,
    PublicidadComponent,
    OfertasComponent,
    SliderEncabezadoComponent,
    ComprarComponent,
    ImgEncabezadoComponent,
    PuntuacionCtrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    ConfigService, CompraService, PublicidadService,
    TextsService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [NotFoundComponent]
})
export class AppModule { }
