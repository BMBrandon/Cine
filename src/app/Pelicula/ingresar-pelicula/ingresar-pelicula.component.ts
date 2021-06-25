import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServicioService } from 'src/app/Servicio/pelicula-servicio.service';
import { Pelicula } from 'src/Modelo/Pelicula';

@Component({
  selector: 'app-ingresar-pelicula',
  templateUrl: './ingresar-pelicula.component.html',
  styleUrls: ['./ingresar-pelicula.component.css']
})
export class IngresarPeliculaComponent implements OnInit {

  constructor(private service:PeliculaServicioService, private router:Router) { }
  public pelicula:Pelicula=new Pelicula(0,"",0,"","");

  ngOnInit(): void {
  }
  Guardar(){
    this.service.setPelicula(this.pelicula)
    .subscribe(data=>{
      alert("Se agrego con Exito ")
      this.router.navigate(["listaPelicula"])
    })
  }

}
