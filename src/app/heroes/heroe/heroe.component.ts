import { Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  nombre:string="IronMan";
  edad:number=20;
  nacionalidad:string="Argentino";

  cambiarNombre():void{
    this.nombre="SpiderMan";
  }

  cambiarEdad():void{
    this.edad=30;
  }
  

}
