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
  points: number[] = [];
  arrayPoints: number[] = [0];

  constructor(private playerService: PlayerService) {}

  getPoints(newPlayer: Player) {
    this.newPlayer = this.playerService.getPlayer(this.newPlayer);
    this.arrayPoints = this.arrayPoints.concat(this.newPlayer.points);
    console.log(this.arrayPoints);
  }

  getTotal(newPlayer: Player) {
    this.total = this.arrayPoints.reduce((a, b) => a + b, 0);
  }

  addPlayer(form: NgForm) {
    const value = form.value;
    this.playerName = value.name;
    this.newPlayer = new Player(this.playerService.getId(), value.name , this.points);
    console.log(this.newPlayer);
    this.playerService.addPlayer(this.newPlayer);
  }

  addPoints(form: NgForm) {
    const value = form.value;
    // const playerId = this.playerService.setId();
    this.newPlayer = new Player(this.playerService.getId(), this.playerName, value.points);
    console.log(this.newPlayer);
    this.playerService.addPoints(this.newPlayer);
    this.getPoints(this.newPlayer);
    this.getTotal(this.newPlayer);
  }
}
