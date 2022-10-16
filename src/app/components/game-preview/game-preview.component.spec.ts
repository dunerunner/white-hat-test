import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePreviewComponent } from './game-preview.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('GamePreviewComponent', () => {
  let component: GamePreviewComponent;
  let fixture: ComponentFixture<GamePreviewComponent>;

  beforeEach(async () => {
    const initialState = {};
    await TestBed.configureTestingModule({
      declarations: [GamePreviewComponent],
      providers: [
        provideMockStore({
          initialState: initialState,
          selectors: [
            {
              selector: 'games', value: {
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
              }
            },
          ],
        }),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GamePreviewComponent);
    component = fixture.componentInstance;
    component.game = {
      "categories": [
        "top",
        "slots",
        "new"
      ],
      "name": "The Wish Master",
      "image": "//stage.whgstage.com/scontent/images/games/NEJACKANDTHEBEANSTALK.jpg",
      "id": "NEJACKANDTHEBEANSTALK"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
