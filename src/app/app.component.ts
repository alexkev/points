import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public numPlayer;
  public players: Array<number> = [];


  public addPlayer() {
    this.players.push(this.numPlayer);
  }
}
