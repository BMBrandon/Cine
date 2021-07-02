import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaServicioService } from 'src/app/Servicio/sala-servicio.service';
import { Sala } from 'src/Modelo/Sala';


@Component({
  selector: 'app-listar-sala',
  templateUrl: './listar-sala.component.html',
  styleUrls: ['./listar-sala.component.css']
})
export class ListarSalaComponent implements OnInit {
  listaSala:Sala[]=[];

  constructor(private servicio:SalaServicioService,private router:Router) { }

 
  ngOnInit(): void {
    this.servicio.getSala()
    .subscribe(data=>{
      this.listaSala=data;

    })
  }
  Modificar(sala:Sala):void{
    localStorage.setItem("id", sala.id.toString());
    this.router.navigate(["modificarSala"]);
  }
  Eliminar(sala:Sala){
    this.servicio.delete(sala)
    .subscribe(data=>{
      this.listaSala=this.listaSala.filter(p=>p!==sala);
      alert ("Se a eliminado correctamente")

    })
  }

}
