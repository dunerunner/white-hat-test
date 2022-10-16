import { Action, createReducer, on } from '@ngrx/store';
import {
  Game, getGamesByGroup,
  Jackpot,
  loadGamesFailure,
  loadGamesSuccess,
  loadJackpotsFailure,
  loadJackpotsSuccess
} from '../actions/games.actions';

export interface GamesState {
  games: Game[];
  currentGroup: Game[];
  jackpots: Jackpot[];
}

export const initialState: GamesState = {
  games: [],
  currentGroup: [],
  jackpots: [],
};

const filterGames = (games: Game[], group: string) => {
  let result;
  if (group === 'other') {
    result = games.filter(game => game.categories.includes('ball')
      || game.categories.includes('virtual')
      || game.categories.includes('fun'));
  } else {
    result = games.filter(game => game.categories.includes(group));
  }

  return result;
}
const _gamesReducer = createReducer(
  initialState,
  on(loadGamesSuccess, (state, payload) => {
    const newState = { ...state };
    newState.games = payload.games;
    newState.currentGroup = filterGames(payload.games, payload.group || '');

    return newState;
  }),
  on(loadGamesFailure, (state, payload) => {
    console.log('loadGames Status Code', payload.error);
    return { ...state };
  }),
  on(loadJackpotsSuccess, (state, payload) => {
    const newState = { ...state };
    newState.jackpots = payload.jackpots;
    return newState;
  }),
  on(loadJackpotsFailure, (state, payload) => {
    console.log('loadJackpots Status Code', payload.error);
    return { ...state };
  }),
  on(getGamesByGroup, (state, payload) => {
    const newState = { ...state };
    newState.currentGroup = filterGames(state.games, payload.group);
    return { ...newState };
  }),
);

export function gamesReducer(state: any, action: any) {
  return _gamesReducer(state, action);
}
