import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent {
  hostId: number;

  constructor(private playerService: PlayerService) { }

  addNewGame(form: NgForm) {
    this.hostId = Math.floor(1000 + Math.random() * 9000);
    console.log(this.hostId);
    this.playerService.setId(this.hostId);
  }

  onSubmit(form: NgForm) {
    this.hostId = form.value.id;
    console.log(this.hostId);
    this.playerService.setId(this.hostId);
  }

}
