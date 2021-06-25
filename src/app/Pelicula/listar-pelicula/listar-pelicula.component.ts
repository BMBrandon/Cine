import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServicioService } from 'src/app/Servicio/pelicula-servicio.service';
import { Pelicula } from 'src/Modelo/Pelicula';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.css']
})
export class ListarPeliculaComponent implements OnInit {
  listaPelicula:Pelicula[]=[];

  constructor(private servicio:PeliculaServicioService,private router:Router) { }

 
  ngOnInit(): void {
    this.servicio.getPelicula()
    .subscribe(data=>{
      this.listaPelicula=data;

    })
  }
  Modificar(pelicula:Pelicula):void{
    localStorage.setItem("id", pelicula.id.toString());
    this.router.navigate(["modificarPelicula"]);
  }
  Eliminar(pelicula:Pelicula){
    this.servicio.delete(pelicula)
    .subscribe(data=>{
      this.listaPelicula=this.listaPelicula.filter(p=>p!==pelicula);
      alert ("Se a eliminado correctamente")

    })
  }

}
