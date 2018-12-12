import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent {
  public hostId: number;

  constructor(private playerService: PlayerService) { }

  addNewGame() {
    // TODO 4 digit generator
  }

  onSubmit() {
    this.playerService.addId(this.hostId);
  }

}
