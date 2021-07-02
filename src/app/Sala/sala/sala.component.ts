import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }
  Ingresar(){
    this.router.navigate(["ingresarSala"]);
  }
 
  Listar(){
    this.router.navigate(["listaSala"]);
  }

}
