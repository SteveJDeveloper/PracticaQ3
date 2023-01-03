import { IPlayer } from "./player.interface";

export interface IModal{
    title: string;
    player?: IPlayer;
    flag: boolean;
    button: string;
}