import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFeedComponent } from './game-feed.component';

describe('GameFeedComponent', () => {
  let component: GameFeedComponent;
  let fixture: ComponentFixture<GameFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFeedComponent ]
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
