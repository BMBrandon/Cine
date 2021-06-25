import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Ingresar(){
    this.router.navigate(["ingresarPersonas"]);
  }
 
  Listar(){
    this.router.navigate(["listaPersona"]);
  }

}
