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

  getId(hostId: number) {
    // adds id of host
    this.playerId = hostId;
  }

  setId() {
    return this.playerId;
  }

  getPlayers() {
  }

  addPlayer(newPlayer: Player) {
    // this.http.get<{ message: string, player: Player[] }>('http://localhost:3000/player')
    //   .subscribe(
    //     (responseData) => {

          // if ( )  player exsists
          // post
          const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });

          console.log(newPlayer);

          this.http.post<{ message: string, player: Player[] }>('http://localhost:3000/player', newPlayer,
            { headers: headers })
            .subscribe(
              (res) => {
              });

          // else
          // patch

        // });

   }
}
