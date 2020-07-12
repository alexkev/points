import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public numPlayer = 0;
  public numPlayers: Array<number> = [0, 1];

  public addPlayer() {
    this.numPlayers.push(this.numPlayer);
  }
}
