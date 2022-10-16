import { gamesReducer, GamesState } from './games.reducer';
import {
  loadGamesFailure,
  loadGamesSuccess,
  loadJackpotsFailure,
  loadJackpotsSuccess
} from '../actions/games.actions';

const gamesArray= [
  {
    "categories": [
      "top",
      "slots",
      "new"
    ],
    "name": "The Wish Master",
    "image": "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
    "id": "NETHEWISHMASTER"
  },
  {
    "categories": [
      "top",
      "slots",
      "new"
    ],
    "name": "Aliens",
    "image": "//stage.whgstage.com/scontent/images/games/NEALIENS.jpg",
    "id": "NEALIENS"
  },
];

const jackpotsArray = [
  {
    "game": "NEJACKANDTHEBEANSTALK",
    "amount": 4125
  },
  {
    "game": "LEPABLOPICASSOSLOT",
    "amount": 1980
  }
];

const error = {
  'name': 'error',
  'message': 'loadGames Status Code',
  'stack': ''
};

describe('Reducer:Games ', () => {

  it('should load games ', () => {
    const expected: GamesState = {
      games: [
        {
          "categories": [
            "top",
            "slots",
            "new"
          ],
          "name": "The Wish Master",
          "image": "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
          "id": "NETHEWISHMASTER"
        },
        {
          "categories": [
            "top",
            "slots",
            "new"
          ],
          "name": "Aliens",
          "image": "//stage.whgstage.com/scontent/images/games/NEALIENS.jpg",
          "id": "NEALIENS"
        },
      ],
      jackpots: [],
      currentGroup: []
    };
    const action = loadGamesSuccess({games: gamesArray});
    const result = gamesReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should show error on action "loadGamesFailure" ', () => {
    const expected = {
      games: [],
      jackpots: [],
      currentGroup: []
    };
    const action = loadGamesFailure({ error });
    const result = gamesReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should load jackpots', () => {
    const expected: GamesState = {
      games: [],
      jackpots: [
        {
          "game": "NEJACKANDTHEBEANSTALK",
          "amount": 4125
        },
        {
          "game": "LEPABLOPICASSOSLOT",
          "amount": 1980
        }
      ],
      currentGroup: []
    };
    const action = loadJackpotsSuccess({
      jackpots: jackpotsArray
    });
    const result = gamesReducer(undefined, action);
    expect(result).toEqual(expected);
  });

  it('should show error on action "loadJackpotsFailure" ', () => {
    const expected = {
      games: [],
      jackpots: [],
      currentGroup: []
    };
    const action = loadJackpotsFailure({ error });
    const result = gamesReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});
