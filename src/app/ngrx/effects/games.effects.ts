import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  loadGames,
  loadGamesFailure,
  loadGamesSuccess,
  loadJackpots, loadJackpotsFailure,
  loadJackpotsSuccess
} from '../actions/games.actions';
import { GamesService } from '../services/games.service';


@Injectable()
export class GamesEffects {
  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType(loadGames),
    switchMap((action) =>
      this.gamesService.getGames().pipe(
        map((games) =>
          loadGamesSuccess({ games, group: action.group })),
        catchError((error) => of(loadGamesFailure(error))),
      ),
    )
  ));

  loadJackpots$ = createEffect(() => this.actions$.pipe(
    ofType(loadJackpots),
    switchMap(() =>
      this.gamesService.getJackpots().pipe(
        map((jackpots) =>
          loadJackpotsSuccess({ jackpots })),
        catchError((error) => of(loadJackpotsFailure(error))),
      ),
    )
  ));

  constructor(
    private actions$: Actions,
    private gamesService: GamesService
  ) {
  }
}
