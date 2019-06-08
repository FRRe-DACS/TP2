
/* Desde express importo los objetos Request y Response  
permiten hacer solicitud de informacion HTTP o dar una 
Respuesta  HTTP*/
import { Request, Response } from 'express';

class IndexController {

    /* Metodo: muestra la ruta donde se encuentra la API  */
    public index(req: Request, res: Response) {
        res.json({text: 'API is in /api/games'});
    }

}

/* Instancio un IndexController y lo guardo en indexController, luego lo exporto   */
export const indexController = new IndexController;