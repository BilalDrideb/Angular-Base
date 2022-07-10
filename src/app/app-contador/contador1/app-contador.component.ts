import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-contador',
  templateUrl: './app-contador.component.html',
  styleUrls: ['./app-contador.component.css']
})
export class AppContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:string = 'Contador';
  numero:number=0;

  contador(action:number){
    this.numero === 0 && action===-1 ? 
    this.numero=0:
    this.numero=this.numero+action;
  }

  reset(){
    this.numero=0
  }


}
