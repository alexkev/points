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

    this.http.post<{ message: string, players: Player[]}>('https://points-1234.firebaseio.com/players',
    { headers: headers })
    .subscribe(
      (responseData) => {
        this.getPlayers();
      });
  }
}
