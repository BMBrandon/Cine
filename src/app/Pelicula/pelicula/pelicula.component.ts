import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }
  Ingresar(){
    this.router.navigate(["ingresarPelicula"]);
  }
 
  Listar(){
    this.router.navigate(["listaPelicula"]);
  }

}
