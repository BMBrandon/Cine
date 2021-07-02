import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sala } from 'src/Modelo/Sala';

@Injectable({
  providedIn: 'root'
})
export class SalaServicioService {

  constructor(private http:HttpClient) { }
  URL = 'http://localhost:8080/api/salas/'
  
  getSala(){
    return this.http.get<Sala[]>(this.URL);
  }
  setSala(persona:Sala){
    return this.http.post<Sala>(this.URL,persona);
  }
  delete(persona:Sala){
    return this.http.delete<Sala>(this.URL+persona.id)
  }
  getIdSala(id:number){
    return this.http.get<Sala>(this.URL+id);
  }
  update(persona:Sala){
    return this.http.put<Sala>(this.URL+persona.id, persona);
  }
}
