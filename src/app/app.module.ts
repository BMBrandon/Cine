import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './Persona/persona/persona.component';
import { IngresarPComponent } from './Persona/ingresar-p/ingresar-p.component';
import { ListarPComponent } from './Persona/listar-p/listar-p.component';
import { ModificarPComponent } from './Persona/modificar-p/modificar-p.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PeliculaComponent } from './Pelicula/pelicula/pelicula.component';
import { IngresarPeliculaComponent } from './Pelicula/ingresar-pelicula/ingresar-pelicula.component';
import { ListarPeliculaComponent } from './Pelicula/listar-pelicula/listar-pelicula.component';
import { ModificarPeliculaComponent } from './Pelicula/modificar-pelicula/modificar-pelicula.component';
import { EntradaComponent } from './Entrada/entrada/entrada.component';
import { IngresarEntradaComponent } from './Entrada/ingresar-entrada/ingresar-entrada.component';
import { ListarEntradaComponent } from './Entrada/listar-entrada/listar-entrada.component';
import { ModificarEntradaComponent } from './Entrada/modificar-entrada/modificar-entrada.component';
import { SalaComponent } from './Sala/sala/sala.component';
import { IngresarSalaComponent } from './Sala/ingresar-sala/ingresar-sala.component';
import { ListarSalaComponent } from './Sala/listar-sala/listar-sala.component';
import { ModificarSalaComponent } from './Sala/modificar-sala/modificar-sala.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    IngresarPComponent,
    ListarPComponent,
    ModificarPComponent,
    
    PeliculaComponent,
    IngresarPeliculaComponent,
    ListarPeliculaComponent,
    ModificarPeliculaComponent,

    EntradaComponent,
    IngresarEntradaComponent,
    ListarEntradaComponent,
    ModificarEntradaComponent,

    SalaComponent,
    IngresarSalaComponent,
    ListarSalaComponent,
    ModificarSalaComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
