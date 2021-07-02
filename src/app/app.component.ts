import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cine';
  constructor( private router:Router){}

  Persona(){
    this.router.navigate(["persona"])

  }
  Peliculas(){
    this.router.navigate(["pelicula"])
  }
  Salas(){
    this.router.navigate(["sala"])
  }
  Entradas(){
    this.router.navigate(["entrada"])
  }
  Proyecciones(){
    this.router.navigate(["vehiculo"])
  }

}
