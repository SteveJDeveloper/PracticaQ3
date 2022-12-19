import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/players/player.service';

@Component({
  selector: 'app-mi-team',
  templateUrl: './mi-team.component.html',
  styleUrls: ['./mi-team.component.scss']
})
export class MiTeamComponent implements OnInit {

  modalFlag: boolean = false;

  players: any[] = [];

  tituloModal: string = "";

  player: any;

  constructor(private playerService:PlayerService) { 
    this.players = this.playerService.getAllPlayers();
  }

  ngOnInit(): void {}

  searchName(name: string){
    this.players = this.playerService.getAllPlayers().filter(obj => obj.playerName.toLowerCase().includes(name.toLowerCase()));
    if(name === ""){
      this.players = this.playerService.getAllPlayers();
    }
  }

  setModalView(modal: any){
    this.player = modal.player;
    this.tituloModal = modal.title;
    this.modalFlag= modal.flag;
  }

}
