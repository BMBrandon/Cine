import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrada } from 'src/Modelo/Entrada';


@Injectable({
  providedIn: 'root'
})
export class EntradaServicioService {

  constructor(private http:HttpClient) { }
  URL = 'http://localhost:8080/api/entradas/'
  
  getEntrada(){
    return this.http.get<Entrada[]>(this.URL);
  }
  setEntrada(persona:Entrada){
    return this.http.post<Entrada>(this.URL,persona);
  }
  delete(persona:Entrada){
    return this.http.delete<Entrada>(this.URL+persona.id)
  }
  getIdEntrada(id:number){
    return this.http.get<Entrada>(this.URL+id);
  }
  update(persona:Entrada){
    return this.http.put<Entrada>(this.URL+persona.id, persona);
  }
}
