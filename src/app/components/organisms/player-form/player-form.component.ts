import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<boolean>();

  @Input() titulo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closeEvent.emit(false);
  }

}
