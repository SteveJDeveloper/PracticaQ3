import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  titulo: string = "Mi Equipo";
  
  busqueda: string = "";

  @Output() busquedaEvent = new EventEmitter<string>();

  @Output() addEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendBusqueda(){
    this.busquedaEvent.emit(this.busqueda);
  }

  addPlayer(){
    let obj = {
      player: null,
      title: "Agregar Jugador",
      flag: true
    }
    this.addEvent.emit(obj);
  }

}
