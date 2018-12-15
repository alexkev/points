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

  getId() {
    return this.playerId;
  }

  setId(hostId: number) {
    this.playerId = hostId;
  }

  getPlayers() {
    // TODO get all players with the same hostId
  }

  getPlayer() {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   this.http.get<{ message: string, player: Player[] }>('http://localhost:3000/player', newPlayer,
  //   { headers: headers })
  //   .subscribe(
  //     (res) => {
  //     });
  }

  addPlayer(newPlayer: Player) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(newPlayer);

    this.http.post<{ message: string, player: Player[] }>('http://localhost:3000/player', newPlayer,
      { headers: headers })
      .subscribe(
        (res) => {
        });
  }

  addPoints(newPlayer: Player) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put<{ message: string, documents: Document[]}>('http://localhost:3000/player/' + newPlayer.id + '/' + newPlayer.name
    , newPlayer
    , { headers: headers })
    .subscribe(
      (responseData) => {
      });
  }
}
