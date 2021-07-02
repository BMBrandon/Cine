import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaServicioService } from 'src/app/Servicio/entrada-servicio.service';
import { Entrada } from 'src/Modelo/Entrada';



@Component({
  selector: 'app-modificar-entrada',
  templateUrl: './modificar-entrada.component.html',
  styleUrls: ['./modificar-entrada.component.css']
})
export class ModificarEntradaComponent implements OnInit {

  constructor(private service:EntradaServicioService, private router:Router) { }
  public entrada:Entrada=new Entrada(0,"","","");

  ngOnInit(): void {
    this.edit();
  }
  
  edit(){
    let codigo=String(localStorage.getItem("id"));
    this.service.getIdEntrada(+codigo)
    .subscribe(data=>{
      
      this.entrada=data;
    })

  }

  Actualizar(){
    this.service.update(this.entrada)
    .subscribe(data=>{
      alert("Se modifico con Exito ")
      this.router.navigate(["listaEntrada"])
    })
  }
}
