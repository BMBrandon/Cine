import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './Entrada/entrada/entrada.component';
import { IngresarEntradaComponent } from './Entrada/ingresar-entrada/ingresar-entrada.component';
import { ListarEntradaComponent } from './Entrada/listar-entrada/listar-entrada.component';
import { ModificarEntradaComponent } from './Entrada/modificar-entrada/modificar-entrada.component';


import { IngresarPeliculaComponent } from './Pelicula/ingresar-pelicula/ingresar-pelicula.component';
import { ListarPeliculaComponent } from './Pelicula/listar-pelicula/listar-pelicula.component';
import { ModificarPeliculaComponent } from './Pelicula/modificar-pelicula/modificar-pelicula.component';
import { PeliculaComponent } from './Pelicula/pelicula/pelicula.component';
import { IngresarPComponent } from './Persona/ingresar-p/ingresar-p.component';
import { ListarPComponent } from './Persona/listar-p/listar-p.component';
import { ModificarPComponent } from './Persona/modificar-p/modificar-p.component';
import { PersonaComponent } from './Persona/persona/persona.component';
import { IngresarSalaComponent } from './Sala/ingresar-sala/ingresar-sala.component';
import { ListarSalaComponent } from './Sala/listar-sala/listar-sala.component';
import { ModificarSalaComponent } from './Sala/modificar-sala/modificar-sala.component';
import { SalaComponent } from './Sala/sala/sala.component';

const routes: Routes = [
  {path:"persona", component:PersonaComponent},
  {path:"listaPersona", component:ListarPComponent},
  {path:"ingresarPersonas", component:IngresarPComponent},
  {path:"modificarPersonas", component:ModificarPComponent},
  {path:"pelicula", component:PeliculaComponent},
  {path:"listaPelicula", component:ListarPeliculaComponent},
  {path:"ingresarPelicula", component:IngresarPeliculaComponent},
  {path:"modificarPelicula", component:ModificarPeliculaComponent},
  {path:"entrada", component:EntradaComponent},
  {path:"listaEntrada", component:ListarEntradaComponent},
  {path:"ingresarEntrada", component:IngresarEntradaComponent},
  {path:"modificarEntrada", component:ModificarEntradaComponent},
  {path:"sala", component:SalaComponent},
  {path:"listaSala", component:ListarSalaComponent},
  {path:"ingresarSala", component:IngresarSalaComponent},
  {path:"modificarSala", component:ModificarSalaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
