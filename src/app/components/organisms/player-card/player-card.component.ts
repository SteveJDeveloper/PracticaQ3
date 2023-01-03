import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IModal } from 'src/app/utils/interfaces/modal.interface';
import { IPlayer } from 'src/app/utils/interfaces/player.interface';
import { PlayerService } from 'src/app/services/players/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player?: IPlayer;

  @Output() editEvent = new EventEmitter<IModal>();

  constructor(
    private playerService:PlayerService
  ) { }

  ngOnInit(): void {
  }

  editPlayer(){
    let object: IModal = {
      player: this.player,
      title: "Editar Jugador",
      button: "Editar",
      flag: true
    }
    this.editEvent.emit(object);
  }

  deletePlayer(){
    this.playerService.deletePlayer(this.player!);
  }
}
