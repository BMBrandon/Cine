import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Persona } from 'src/Modelo/Persona';



@Injectable({
  providedIn: 'root'
})
export class SrevicioPersonaService {

  constructor(private http:HttpClient) { }
  URL = 'http://localhost:8080/api/persona/'
  
  getPersonas(){
    return this.http.get<Persona[]>(this.URL);
  }
  setPersona(persona:Persona){
    return this.http.post<Persona>(this.URL,persona);
  }
  delete(persona:Persona){
    return this.http.delete<Persona>(this.URL+persona.id)
  }
  getIdPersona(id:number){
    return this.http.get<Persona>(this.URL+id);
  }
  update(persona:Persona){
    return this.http.put<Persona>(this.URL+persona.id, persona);
  }
}
