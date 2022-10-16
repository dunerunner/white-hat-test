import { createAction, props } from '@ngrx/store';

const actionPrefix = '[games]';

export interface Game {
  categories: string[];
  name: string;
  image: string;
  id: string;
}

export interface Jackpot {
  game: string;
  amount: number;
}

export const loadGames = createAction(`${actionPrefix} load`, props<{ group?: string }>());
export const loadGamesSuccess = createAction(`${actionPrefix} load success`, props<{ games: Game[], group?: string }>());
export const loadGamesFailure = createAction(`${actionPrefix} load failure`, props<{ error: Error }>());

export const getGamesByGroup = createAction(`${actionPrefix} get group`, props<{ group: string }>());

export const loadJackpots = createAction(`${actionPrefix} jackpots load`);
export const loadJackpotsSuccess = createAction(`${actionPrefix} jackpots load success`, props<{ jackpots: Jackpot[] }>());
export const loadJackpotsFailure = createAction(`${actionPrefix} jackpots load failure`, props<{ error: Error }>());
