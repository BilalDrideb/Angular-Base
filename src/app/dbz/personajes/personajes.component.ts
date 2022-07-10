import { Component, Input, } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interfaz';
import { DbzService } from '../services/db.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // In
  constructor(private dbzService:DbzService)
  {}

  @Input('data') listaPersonajes:Personaje[]=[];

  get data():Personaje[]{
    return this.dbzService.data;
  }  
  

}
