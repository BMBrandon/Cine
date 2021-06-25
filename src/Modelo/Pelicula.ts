export class Pelicula{

    id:number;
    nombre:string;
    minutos:number;
    fechaestreno:string;
    categoria:string;
    
    
    
    constructor (id:number,  nombre:string, minutos:number, fechaestreno:string,  categoria:string){
      
        this.id=id;
        this.nombre=nombre;
        this.minutos=minutos;
        this.fechaestreno=fechaestreno;
        this.categoria=categoria;
        
    }
}
