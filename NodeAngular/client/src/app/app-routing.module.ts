import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/games', // redirecciono al usuario desde la inicio hasta /games
    pathMatch: 'full'     
  },
  {
    path: 'games',
    component: GamesListComponent  // redenderiza el componente GameListComponent
  },
  {
    path: 'games/add',           // al visitar la path games/add
    component: GameFormComponent // redenderiza el componente GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
