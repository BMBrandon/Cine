import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from 'src/Modelo/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServicioService {

  constructor(private http:HttpClient) { }
  URL = 'http://localhost:8080/api/peliculas/'
  
  getPelicula(){
    return this.http.get<Pelicula[]>(this.URL);
  }
  setPelicula(persona:Pelicula){
    return this.http.post<Pelicula>(this.URL,persona);
  }
  delete(persona:Pelicula){
    return this.http.delete<Pelicula>(this.URL+persona.id)
  }
  getIdPelicula(id:number){
    return this.http.get<Pelicula>(this.URL+id);
  }
  update(persona:Pelicula){
    return this.http.put<Pelicula>(this.URL+persona.id, persona);
  }
}
