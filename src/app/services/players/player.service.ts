import { Injectable } from '@angular/core';
import { IPlayer } from 'src/app/utils/interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: IPlayer[] = [
    {
      urlImg: "https://s1.eestatic.com/2021/06/06/elbernabeu/586953509_187289071_1706x960.jpg",
      name: "Lionel",
      lastName: "Messi",
      attack: 100,
      deffense: 100,
      skill: 100,
      position: "Delantero"
    },
    {
      urlImg: "https://cdn-japantimes.com/wp-content/uploads/2022/11/np_file_196720.jpeg",
      name: "Cristiano",
      lastName: "Ronaldo",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://pbs.twimg.com/media/EuWkxCmXMAAa3Hs.jpg:large",
      name: "Kylian",
      lastName: "Mbappe",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://depor.com/resizer/O4ymapQUArUQcftKcGnhZ0QzR0Y=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SYTNMB356NCWHKDTECAM4YF6NI.gif",
      name: "Karim",
      lastName: "Benzema",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://cdn.conmebol.com/wp-content/uploads/2018/01/roe_.jpg",
      name: "Ronaldinho",
      lastName: "Gaucho",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://s1.sportstatics.com/relevo/www/multimedia/202212/13/media/cortadas/Modric-RZ3xniKEqHsp51S5IbWCSYJ-720x960@Relevo.jpg?cw=414&ch=552&img=default",
      name: "Luka",
      lastName: "Modric",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://futbolete.com/wp-content/uploads/2022/11/brasil-neymar-catar-2022-bild-1200x900.jpg",
      name: "Neymar",
      lastName: "Jr",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://tmssl.akamaized.net/images/foto/galerie/ronaldo-luis-nazario-de-lima-1472042256-5977.jpg?lm=1483606131",
      name: "Ronaldo",
      lastName: "Nazario",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://bolavip.com/__export/1663791444975/sites/bolavip/img/2022/09/21/gettyimages-1423724077_crop1663791444074.jpg_1159711837.jpg",
      name: "Kevin",
      lastName: "De Bruyne",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
    {
      urlImg: "https://strikers.futbol/__export/1669487463772/sites/strikers/img/2022/11/20/enner.jpg_1363788249.jpg",
      name: "Enner",
      lastName: "Valencia",
      attack: 99,
      deffense: 98,
      skill: 97,
      position: "Delantero"
    },
  ]

  constructor() { }

  getAllPlayers(): IPlayer[] {
    return this.players;
  }

  savePlayer(player: IPlayer): void {
    this.players.push(player);
  }

  editPlayer(player: IPlayer, newPlayer: IPlayer): void {
    let index = this.players.indexOf(player);
    this.players.splice(index,1,newPlayer);
  }

  deletePlayer(player: IPlayer): void{
    let index = this.players.indexOf(player);
    this.players.splice(index,1);
  }
}
