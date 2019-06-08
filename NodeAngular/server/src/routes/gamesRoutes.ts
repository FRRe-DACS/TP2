import express, { Router } from 'express';

/* importo la clase gamesController encargada de la capa de acceso a datos   */
import gamesController from '../controllers/gamesController';


class GameRoutes {

    router: Router = Router();

    /* Constructor que inicializa la configuracion   */
    constructor() {
        this.config();
    }

    /* configuracion de rutas por medio de router y la capa de acceso a datos asociada
    por medio de la clase gamesController  */
    config() {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }

}

/* exporto las una instancia de la clase GamesRoutes    */
export default new GameRoutes().router;

