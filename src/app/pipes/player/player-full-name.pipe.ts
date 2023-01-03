import { Pipe, PipeTransform } from '@angular/core';
import { IPlayer } from 'src/app/utils/interfaces/player.interface';

@Pipe({
  name: 'playerFullName'
})
export class PlayerFullNamePipe implements PipeTransform {

  transform(player: IPlayer, ...args: unknown[]): string{
    return player.name + " " + player.lastName;
  }

}
