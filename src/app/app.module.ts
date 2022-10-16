import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { GameFeedComponent } from './components/game-feed/game-feed.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { gamesReducer } from './ngrx/reducers/games.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './ngrx/effects/games.effects';
import { HttpClientModule } from '@angular/common/http';
import { GamePreviewComponent } from './components/game-preview/game-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    GameFeedComponent,
    NavigationMenuComponent,
    GamePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      games: gamesReducer
    }),
    EffectsModule.forRoot([
      GamesEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
