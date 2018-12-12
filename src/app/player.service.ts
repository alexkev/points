import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerId: number;

  constructor() { }

  addId(hostId: number) {
    // adds id of host
    this.playerId = hostId;
  }

  getId() {
    // gets id for players
  }
}
