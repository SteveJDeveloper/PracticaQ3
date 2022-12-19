import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: any[] = [
    {playerImg: "https://s1.eestatic.com/2021/06/06/elbernabeu/586953509_187289071_1706x960.jpg",
    playerName: "Lionel Messi",
    playerAttack: "100",
    playerDeffense: "100",
    playerSkill: "100"},
    {playerImg: "https://cdn-japantimes.com/wp-content/uploads/2022/11/np_file_196720.jpeg",
    playerName: "Cristiano Ronaldo",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://pbs.twimg.com/media/EuWkxCmXMAAa3Hs.jpg:large",
    playerName: "Kylian Mbappe",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://depor.com/resizer/O4ymapQUArUQcftKcGnhZ0QzR0Y=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SYTNMB356NCWHKDTECAM4YF6NI.gif",
    playerName: "Karim Benzema",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://cdn.conmebol.com/wp-content/uploads/2018/01/roe_.jpg",
    playerName: "Ronaldinho",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://s1.sportstatics.com/relevo/www/multimedia/202212/13/media/cortadas/Modric-RZ3xniKEqHsp51S5IbWCSYJ-720x960@Relevo.jpg?cw=414&ch=552&img=default",
    playerName: "Luka Modric",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://futbolete.com/wp-content/uploads/2022/11/brasil-neymar-catar-2022-bild-1200x900.jpg",
    playerName: "Neymar",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://tmssl.akamaized.net/images/foto/galerie/ronaldo-luis-nazario-de-lima-1472042256-5977.jpg?lm=1483606131",
    playerName: "Ronaldo Nazario",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://bolavip.com/__export/1663791444975/sites/bolavip/img/2022/09/21/gettyimages-1423724077_crop1663791444074.jpg_1159711837.jpg",
    playerName: "Kevin De Bruyne",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
    {playerImg: "https://strikers.futbol/__export/1669487463772/sites/strikers/img/2022/11/20/enner.jpg_1363788249.jpg",
    playerName: "Enner Valencia",
    playerAttack: "99",
    playerDeffense: "98",
    playerSkill: "97"},
  ]

  constructor() { }

  getAllPlayers(): any[] {
    return this.players;
  }

  savePlayer($player:any){
    this.players.push($player);
  }
}
