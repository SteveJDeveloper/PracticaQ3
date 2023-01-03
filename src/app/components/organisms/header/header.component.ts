import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IModal } from 'src/app/utils/interfaces/modal.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  title: string = "Mi Equipo";
  
  search: string = "";

  @Output() searchEvent = new EventEmitter<string>();

  @Output() addEvent = new EventEmitter<IModal>();

  constructor() { }

  ngOnInit(): void {
  }

  sendSearch(){
    this.searchEvent.emit(this.search);
  }

  addPlayer(){
    let object: IModal = {
      title: "Agregar Jugador",
      button: "Agregar",
      flag: true
    }
    this.addEvent.emit(object);
  }

}
