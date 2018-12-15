import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent {
  playerName: string;
  total: number;
  newPlayer: Player;

  constructor(private playerService: PlayerService) {}

  getTotal() {
    // TODO get total of points array
    // this.total = this.playerService.getPlayer(this.newPlayer);
  }

  addPlayer(form: NgForm) {
    const value = form.value;
    this.playerName = value.name;
    this.newPlayer = new Player(this.playerService.getId(), value.name , null);
    console.log(this.newPlayer);
    this.playerService.addPlayer(this.newPlayer);
  }

  addPoints(form: NgForm) {
    const value = form.value;
    // const playerId = this.playerService.setId();
    this.newPlayer = new Player(this.playerService.getId(), this.playerName, value.points);
    console.log(this.newPlayer);
    this.playerService.addPoints(this.newPlayer);
  }
}
