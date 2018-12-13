import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player: Player[] = [];
  playerId: number;

  constructor(private http: HttpClient) { }

  addId(hostId: number) {
    // adds id of host
    this.playerId = hostId;
  }

  getId() {
    // gets id for players
  }

  getPlayers() {
  }

  addPlayer(newPlayer: Player) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(newPlayer);

    this.http.post<{ message: string, player: Player[]}>('http://localhost:3000/player', newPlayer,
    { headers: headers })
    .subscribe(
      (responseData) => {
      });
  }
}
