import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public player = 0;
  public players: Array<number> = [];
  public count: string;

  public addPlayer() {
    this.players.push(this.player);
    this.count += 1;
  }
}
