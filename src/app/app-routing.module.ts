import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPeliculaComponent } from './Pelicula/ingresar-pelicula/ingresar-pelicula.component';
import { ListarPeliculaComponent } from './Pelicula/listar-pelicula/listar-pelicula.component';
import { ModificarPeliculaComponent } from './Pelicula/modificar-pelicula/modificar-pelicula.component';
import { PeliculaComponent } from './Pelicula/pelicula/pelicula.component';
import { IngresarPComponent } from './Persona/ingresar-p/ingresar-p.component';
import { ListarPComponent } from './Persona/listar-p/listar-p.component';
import { ModificarPComponent } from './Persona/modificar-p/modificar-p.component';
import { PersonaComponent } from './Persona/persona/persona.component';

const routes: Routes = [
  {path:"persona", component:PersonaComponent},
  {path:"listaPersona", component:ListarPComponent},
  {path:"ingresarPersonas", component:IngresarPComponent},
  {path:"modificarPersonas", component:ModificarPComponent},
  {path:"pelicula", component:PeliculaComponent},
  {path:"listaPelicula", component:ListarPeliculaComponent},
  {path:"ingresarPelicula", component:IngresarPeliculaComponent},
  {path:"modificarPelicula", component:ModificarPeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
