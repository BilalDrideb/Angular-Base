import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from 'src/app/interfaces/dbz.interfaz';
import { DbzService } from '../services/db.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor( private servicio:DbzService) { }

  ngOnInit(): void {
  }


  nuevo:Personaje={
    nombre:"",
    poder:0
  }

  // Crear un metodo que envia datos a un componente 
  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();  

  agregar(){
    const {nombre,poder}=this.nuevo;
    if (nombre.length>0 && poder>0) {
    this.onNuevoPersonaje.emit(this.nuevo)
    }
    this.nuevo={
      nombre:"",
      poder:0
    }
    
    
  }
  
}
