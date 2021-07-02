import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaServicioService } from 'src/app/Servicio/sala-servicio.service';
import { Sala } from 'src/Modelo/Sala';

@Component({
  selector: 'app-modificar-sala',
  templateUrl: './modificar-sala.component.html',
  styleUrls: ['./modificar-sala.component.css']
})
export class ModificarSalaComponent implements OnInit {

  constructor(private service:SalaServicioService, private router:Router) { }
  public sala:Sala=new Sala(0,"");

  ngOnInit(): void {
    this.edit();
  }
  
  edit(){
    let codigo=String(localStorage.getItem("id"));
    this.service.getIdSala(+codigo)
    .subscribe(data=>{
      
      this.sala=data;
    })

  }

  Actualizar(){
    this.service.update(this.sala)
    .subscribe(data=>{
      alert("Se modifico con Exito ")
      this.router.navigate(["listaSala"])
    })
  }
}
