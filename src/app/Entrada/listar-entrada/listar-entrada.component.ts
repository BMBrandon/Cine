import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaServicioService } from 'src/app/Servicio/entrada-servicio.service';

import { Entrada } from 'src/Modelo/Entrada';


@Component({
  selector: 'app-listar-entrada',
  templateUrl: './listar-entrada.component.html',
  styleUrls: ['./listar-entrada.component.css']
})
export class ListarEntradaComponent implements OnInit {
  listaEntrada:Entrada[]=[];

  constructor(private servicio:EntradaServicioService,private router:Router) { }

 
  ngOnInit(): void {
    this.servicio.getEntrada()
    .subscribe(data=>{
      this.listaEntrada=data;

    })
  }
  Modificar(entrada:Entrada):void{
    localStorage.setItem("id", entrada.id.toString());
    this.router.navigate(["modificarEntrada"]);
  }
  Eliminar(entrada:Entrada){
    this.servicio.delete(entrada)
    .subscribe(data=>{
      this.listaEntrada=this.listaEntrada.filter(p=>p!==entrada);
      alert ("Se a eliminado correctamente")

    })
  }

}
