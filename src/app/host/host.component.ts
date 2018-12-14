import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent {
  hostId: number;

  constructor(private playerService: PlayerService) { }

  addNewGame() {
    // TODO 4 digit generator
  }

  onSubmit(form: NgForm) {
    this.hostId = form.value.id;
    console.log(this.hostId);
    this.playerService.getId(this.hostId);
  }

}
