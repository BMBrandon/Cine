export class Persona{
    id:number;
    cedula:string;
    nombe:string;
    apellido:string;
    correo:string;
    telefono:string;
    Edad:string;
    
    
    constructor (id:number, cedula:string, nombe:string, apellido:string, correo:string, telefono:string, Edad:string){
        this.cedula=cedula;
        this.id=id;
        this.nombe=nombe;
        this.apellido=apellido;
        this.correo=correo;
        this.telefono=telefono;
        this.Edad=Edad;
    }
}