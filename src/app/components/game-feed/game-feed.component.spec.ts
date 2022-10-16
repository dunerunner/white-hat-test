import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFeedComponent } from './game-feed.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('GameFeedComponent', () => {
  let component: GameFeedComponent;
  let fixture: ComponentFixture<GameFeedComponent>;

  beforeEach(async () => {
    const initialState = {};
    const activatedRouteSpy = {
      paramMap: of({ group: 'top' }),
      snapshot: {
        paramMap: convertToParamMap({
          group: 'top',
        })
      }
    };
    await TestBed.configureTestingModule({
      declarations: [GameFeedComponent],
      providers: [
        provideMockStore({
          initialState: initialState,
          selectors: [
            {
              selector: 'games', value: {
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
                currentGroup: [
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
                ]
              }
            },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
