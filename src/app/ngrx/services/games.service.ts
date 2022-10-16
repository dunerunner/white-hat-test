import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, Jackpot } from '../actions/games.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesUrl = 'http://stage.whgstage.com/front-end-test/games.php';
  private jackpotsUrl = 'http://stage.whgstage.com/front-end-test/jackpots.php';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getJackpots(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>(this.jackpotsUrl);
  }
}
