import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrevicioPersonaService } from 'src/app/Servicio/srevicio-persona.service';
import { Persona } from 'src/Modelo/Persona';

@Component({
  selector: 'app-ingresar-p',
  templateUrl: './ingresar-p.component.html',
  styleUrls: ['./ingresar-p.component.css']
})
export class IngresarPComponent implements OnInit {
 

  constructor(private service:SrevicioPersonaService, private router:Router) { }
  public persona:Persona=new Persona(0,"","","","","","");

  ngOnInit(): void {
   
  }
  Guardar(){
    this.service.setPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego con Exito ")
      this.router.navigate(["listaPersonas"])
    })
  }

  

  

}
