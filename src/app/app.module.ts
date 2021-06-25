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
    ModificarPeliculaComponent
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
