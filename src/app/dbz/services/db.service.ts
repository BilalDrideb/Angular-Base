import { Injectable } from "@angular/core";
import { Personaje } from "src/app/interfaces/dbz.interfaz";


@Injectable()
export class DbzService{

  constructor(){
      console.log("Constructor")
  }
  
  listaPersonajes:Personaje[]=[
      {nombre:"Goku",poder:200},
      {nombre:"Vegeta",poder:150},
      {nombre:"Kirin",poder:300},
  ];
  

  // Simulamos como un API REST para tratar los datos
  // Debe ser privada para que no se puede manipular desde fuera del servicio, 
  //y solo se podrá acceder con un getter

  private _data:Personaje[]=[
    {nombre:"Goku",poder:200},
    {nombre:"Vegeta",poder:150},
    {nombre:"Kirin",poder:300},
    {nombre:"ItachiDBZ", poder:1000},
    {nombre:"narutoBall", poder:2},
];
  
// Como ya sabemos los objetos se comparten o se mandan por referecia eso significa que aún así se podrá modificar
// Solucion mandar una copia JSON,spreak operator
  get data():Personaje[]{
    return [...this._data]
  }
  
  set personaje (personaje:Personaje){
      this._data.push(personaje)
  }








}