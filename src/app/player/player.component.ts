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
  player: Player;
  total: number;
  playerName: string;
  playerId: number;

  constructor(private playerService: PlayerService) {}

  getPlayer(form: NgForm) {
    this.playerName = form.value.name;
    console.log(this.playerName);
  }

  getTotal() {
    // TODO get total of points array
  }

  addPoints(form: NgForm) {
    const value = form.value;
    this.playerId = this.playerService.setId();
    console.log(this.playerId);
    const newPlayer = new Player(this.playerId, this.playerName, value.points);
    this.playerService.addPlayer(newPlayer);
  }
}
