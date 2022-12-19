import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player?:any;
  @Input() playerImg?: string;
  @Input() playerName?: string;
  @Input() playerAttack?: string;
  @Input() playerDeffense?: string;
  @Input() playerSkill?: string;

  @Output() editEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  editPlayer(){
    let obj = {
      player: null,
      title: "Editar Jugador",
      flag: true
    }
    this.editEvent.emit(obj);
  }

}
