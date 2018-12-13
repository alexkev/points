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

  constructor(private playerService: PlayerService) {}

  getTotal() {
    // TODO get total of points array
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    // TODO this.playerService.getId()
    const newPlayer = new Player(1234 , value.name, value.points);
    this.playerService.addPlayer();
  }
}
