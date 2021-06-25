import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrevicioPersonaService } from 'src/app/Servicio/srevicio-persona.service';
import { Persona } from 'src/Modelo/Persona';

@Component({
  selector: 'app-listar-p',
  templateUrl: './listar-p.component.html',
  styleUrls: ['./listar-p.component.css']
})
export class ListarPComponent implements OnInit {
  listaPersonas:Persona[]=[];

  constructor(private servicio:SrevicioPersonaService,private router:Router) { }

  ngOnInit(): void {
    this.servicio.getPersonas()
    .subscribe(data=>{
      this.listaPersonas=data;

    })
  }
  Modificar(persona:Persona):void{
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["modificarPersonas"]);
  }
  Eliminar(persona:Persona){
    this.servicio.delete(persona)
    .subscribe(data=>{
      this.listaPersonas=this.listaPersonas.filter(p=>p!==persona);
      alert ("Se a eliminado correctamente")

    })
  }

}
