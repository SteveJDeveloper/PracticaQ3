import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IModal } from 'src/app/utils/interfaces/modal.interface';
import { PlayerService } from 'src/app/services/players/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit, OnChanges {

  @Output() closeEvent = new EventEmitter<boolean>();

  @Input() modal?: IModal;

  formReactive: FormGroup = undefined!;

  constructor(
    private formBuilder: FormBuilder,
    private playersService: PlayerService
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    if(this.modal?.button == "Editar"){
      this.formReactive.reset({
        name: this.modal.player?.name,
        lastName: this.modal.player?.lastName,
        urlImg: this.modal.player?.urlImg,
        position: this.modal.player?.position,
        attack: this.modal.player?.attack,
        deffense: this.modal.player?.deffense,
        skill: this.modal.player?.skill
      });
    }
  }

  createForm(){
    this.formReactive = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      urlImg: ['', [Validators.required]],
      position: ['', [Validators.required]],
      attack: [55,[Validators.required]],
      deffense: [55,[Validators.required]],
      skill: [55,[Validators.required]],
    })
  }

  get nameValid(){
    return this.formReactive.get('name')?.invalid && this.formReactive.get('name')?.touched;
  }
  
  get lastNameValid(){
    return this.formReactive.get('lastName')?.invalid && this.formReactive.get('lastName')?.touched;
  }
  
  get urlImgValid(){
    return this.formReactive.get('urlImg')?.invalid && this.formReactive.get('urlImg')?.touched;
  }

  get positionValid(){
    return this.formReactive.get('position')?.invalid && this.formReactive.get('position')?.touched;
  }

  get imgUrl(){
    return this.formReactive.get('urlImg')?.value;
  }

  get attackValue(){
    return this.formReactive.get('attack')?.value;
  }
  
  get deffenseValue(){
    return this.formReactive.get('deffense')?.value;
  }
  
  get skillValue(){
    return this.formReactive.get('skill')?.value;
  }

  closeModal(){
    this.closeEvent.emit(false);
  }

  savePlayer(){
    if(this.formReactive.valid){
      if(this.modal?.button == "Editar"){
        this.playersService.editPlayer(this.modal.player!,this.formReactive.value);
        this.closeModal();
      }
      if(this.modal?.button == "Agregar"){
        this.playersService.savePlayer(this.formReactive.value);
        this.closeModal();
      }
    }
  }
}
