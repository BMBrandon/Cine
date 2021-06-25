import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrevicioPersonaService } from 'src/app/Servicio/srevicio-persona.service';
import { Persona } from 'src/Modelo/Persona';

@Component({
  selector: 'app-modificar-p',
  templateUrl: './modificar-p.component.html',
  styleUrls: ['./modificar-p.component.css']
})
export class ModificarPComponent implements OnInit {

  constructor(private service:SrevicioPersonaService, private router:Router) { }
  public persona:Persona=new Persona(0,"","","","","","");

  ngOnInit(): void {
    this.edit();
  }
  
  edit(){
    let codigo=String(localStorage.getItem("id"));
    this.service.getIdPersona(+codigo)
    .subscribe(data=>{
      
      this.persona=data;
    })

  }

  Actualizar(){
    this.service.update(this.persona)
    .subscribe(data=>{
      alert("Se modifico con Exito ")
      this.router.navigate(["listaPersona"])
    })
  }

}
