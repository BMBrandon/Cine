import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaServicioService } from 'src/app/Servicio/sala-servicio.service';
import { Sala } from 'src/Modelo/Sala';



@Component({
  selector: 'app-ingresar-sala',
  templateUrl: './ingresar-sala.component.html',
  styleUrls: ['./ingresar-sala.component.css']
})
export class IngresarSalaComponent implements OnInit {

  constructor(private service:SalaServicioService, private router:Router) { }
  public sala:Sala=new Sala(0,"");

  ngOnInit(): void {
  }
  Guardar(){
    this.service.setSala(this.sala)
    .subscribe(data=>{
      alert("Se agrego con Exito ")
      this.router.navigate(["listaSala"])
    })
  }

}
