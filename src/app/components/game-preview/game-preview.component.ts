import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Game, Jackpot, loadGames } from '../../ngrx/actions/games.actions';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GamesState } from '../../ngrx/reducers/games.reducer';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent implements OnInit, OnDestroy {
  @Input() game: Game = {} as Game;

  public gameJackpot: Jackpot | undefined;
  private gamesSubscription: Subscription = new Subscription();

  constructor(
    private store: Store<{
      games: GamesState,
    }>,
  ) {
  }

  ngOnInit(): void {
    const gamesStore = this.store.select('games');
    this.gamesSubscription = gamesStore.subscribe(data => {
      this.gameJackpot = data.jackpots.find(jackpot => jackpot.game === this.game.id);
    });
  }

  ngOnDestroy(): void {
    this.gamesSubscription.unsubscribe();
  }

  launchGame(): void {
    console.log(`Launch game: ${this.game.name}`);
  }
}
