import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServicioService } from 'src/app/Servicio/pelicula-servicio.service';
import { Pelicula } from 'src/Modelo/Pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  constructor(private service:PeliculaServicioService, private router:Router) { }
  public pelicula:Pelicula=new Pelicula(0,"",0,"","");

  ngOnInit(): void {
    this.edit();
  }
  
  edit(){
    let codigo=String(localStorage.getItem("id"));
    this.service.getIdPelicula(+codigo)
    .subscribe(data=>{
      
      this.pelicula=data;
    })

  }

  Actualizar(){
    this.service.update(this.pelicula)
    .subscribe(data=>{
      alert("Se modifico con Exito ")
      this.router.navigate(["listaPelicula"])
    })
  }
}
