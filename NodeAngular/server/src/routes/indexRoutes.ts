/* configurar las rutas a usar por index   */

 /* a express le solicita la clase Router   */
import { Router } from 'express';

/*importo el controlador para index creado anteriormente   */
import { indexController } from '../controllers/indexController';

class IndexRoutes {

    /* Router-->crear manejadores de rutas montables y modulares   */
    public router: Router = Router();

    constructor() {
        this.config();
    }

    /* defino la ruta inicial de la aplicacion definida en--> indexController   */
    config(): void {
        this.router.get('/', indexController.index);
    }

}

/* Instancio un IndexRoutes y lo guardo en indexRoutes, luego lo exporto   */
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;