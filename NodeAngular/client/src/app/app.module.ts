import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importo modulo Http y lo agrego en los imports
import { HttpClientModule } from '@angular/common/http';
// importo formMudules, esto me permite usar enlace dual de datos
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// Esta aplicacion tendra un proveedor llamado GamesService
import { GamesService } from './services/games.service';
import { GameFormComponent } from './components/game-form/game-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // agregado
    FormsModule
  ],
  providers: [
    GamesService  // servicio que tiene metodos para pedir datos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
