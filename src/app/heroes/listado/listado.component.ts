import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  listaHeroes:string[]=['IronMan','SpiderMan','Hulk','Batman','Capitán américa']
  heroeBorrado:string="";
  borrarHeroe(){
   this.heroeBorrado=this.listaHeroes.pop() || "";
  }

}
