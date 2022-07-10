import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interfaz';
import { DbzService } from '../services/db.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService:DbzService){}

  ngOnInit(): void {
  }

get listaPersonajes ():Personaje[]{
  return this.dbzService.listaPersonajes;
}



// Es una funcion que se ejecuta una vez dispare el event que hemos creado onNuevoPersonaje en el componente agrear
aregarNuevoPersonaje(event:Personaje):void{
  this.listaPersonajes.push(event)
 }

  
}
