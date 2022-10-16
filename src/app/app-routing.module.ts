import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameFeedComponent } from './components/game-feed/game-feed.component';

const routes: Routes = [
  { path: 'home/:group', component: GameFeedComponent },
  { path: '', redirectTo: '/home/top', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
