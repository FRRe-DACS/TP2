/* creacion del servicio --> ng g s services/games     */

/* En servicios voy a conectarme con el mi API (Backend)    */

import { Injectable } from '@angular/core';

//Modulo que permite hacer peticiones http
import { HttpClient } from '@angular/common/http';

// importo el modelo que representa un juego(validacion)
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  // variable que me permite tener el camino comun a mi API en el backend
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // aca me estoy conectado a mi API, le doy la ruta exacta

  // Obtengo un listado de juegos, lo relaciona con la operacion definida en la API
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  // Obtengo un juegos, segun un id, lo relaciona con la operacion definida en la API
  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  // a partir de Modelos defino la inteface con los atributos de un juego (validacion)
  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }

}
