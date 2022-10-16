import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game, getGamesByGroup, loadGames, loadJackpots } from '../../ngrx/actions/games.actions';
import { Store } from '@ngrx/store';
import { GamesState } from '../../ngrx/reducers/games.reducer';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-feed',
  templateUrl: './game-feed.component.html',
  styleUrls: ['./game-feed.component.scss']
})
export class GameFeedComponent implements OnInit, OnDestroy {

  private gamesSubscription: Subscription = new Subscription();
  private routeSubscription: Subscription = new Subscription();
  private currentGroup: string = '';
  private jackpotUpdateInterval: number = 3000;
  private jackpotIntervalInstance: any;

  public currentGroupGames: Game[] = [];

  constructor(
    private store: Store<{
      games: GamesState,
    }>,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.currentGroup = this.route.snapshot.paramMap.get('group') || '';
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      this.currentGroup = paramMap.get('group') || '';
      this.store.dispatch(getGamesByGroup({ group: this.currentGroup }));
    });

    const gamesStore = this.store.select('games');
    this.gamesSubscription = gamesStore.subscribe(data => {
      if (!data.games.length) {
        this.store.dispatch(loadGames({ group: this.currentGroup }));
      }
      this.currentGroupGames = data.currentGroup;
    });

    this.jackpotIntervalInstance = setInterval(() => {
      this.store.dispatch(loadJackpots());
    }, this.jackpotUpdateInterval);

  }

  ngOnDestroy(): void {
    this.gamesSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
    if(this.jackpotIntervalInstance) {
      clearInterval(this.jackpotIntervalInstance);
    }
  }

}
