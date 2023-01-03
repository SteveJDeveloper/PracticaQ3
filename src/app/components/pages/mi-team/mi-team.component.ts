import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/players/player.service';
import { IModal } from 'src/app/utils/interfaces/modal.interface';
import { IPlayer } from 'src/app/utils/interfaces/player.interface';

@Component({
  selector: 'app-mi-team',
  templateUrl: './mi-team.component.html',
  styleUrls: ['./mi-team.component.scss']
})
export class MiTeamComponent implements OnInit {

  modalFlag: boolean = false;

  playerMemory: IPlayer[] = [];

  players: IPlayer[] = [];

  player: any;

  modal?: IModal;

  constructor(
    private playerService:PlayerService
  ) { 
    this.players = this.playerService.getAllPlayers();
    this.playerMemory = this.players;
  }

  ngOnInit(): void {}

  searchName(name: string){
    this.players = this.playerMemory.filter(obj => obj.name.toLowerCase().includes(name.toLowerCase()));
    if(name === ""){
      this.players = this.playerMemory;
    }
  }

  setModalView(modal: any){
    this.modalFlag = modal.flag;
    this.modal = modal;
  }

}
