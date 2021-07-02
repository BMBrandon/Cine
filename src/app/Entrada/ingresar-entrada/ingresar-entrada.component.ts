import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaServicioService } from 'src/app/Servicio/entrada-servicio.service';


import { Entrada } from 'src/Modelo/Entrada';

@Component({
  selector: 'app-ingresar-entrada',
  templateUrl: './ingresar-entrada.component.html',
  styleUrls: ['./ingresar-entrada.component.css']
})
export class IngresarEntradaComponent implements OnInit {

  constructor(private service:EntradaServicioService, private router:Router) { }
  public entrada:Entrada=new Entrada(0,"","","");

  ngOnInit(): void {
   
  }
  Guardar(){
    this.service.setEntrada(this.entrada)
    .subscribe(data=>{
      alert("Se agrego con Exito ")
      this.router.navigate(["listaEntrada"])
    })
  }

  

  

}
