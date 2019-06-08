/*npm init --yes --> crear package.json 
--> seccion de script para hacer comandos + modulos y tipos  
nodemon y tsc -w*/

/* npm i express morgan promise-mysql cors */

/* tsc --init --> crear un tsconfig.json-->configuracion de typescript
cambiar version de typescript, outDir-->donde transpila el codigo de Ts-->Js*/


/* npm run build --> copilacion en mode vigilante de ts->js */
/* node build/index.js */


/* npm i nodemon -D --> permite vigilar la cambios de ts-->js
habilita --> npm run dev */

/* Typescript no entiende modulos de Javascript  */
/*requiere instalar modulos de tipos--> npm i @types/express */


/* Framework de Node para crear aplicacion de servidor */
import express, { Application } from 'express';

/* Permite ver en consola del servidor las peticiones del
(cliente)Angular va a hacer Post,Get;Put,Delete */
import morgan from 'morgan';

/* facilita la comunicacion entre los 2 servidores api(3000)<<-->>angular(4200) */
import cors from 'cors';

/* importar las rutas a usar por servidor  */
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server {

    /* app es del tipo Application(express)  */
    public app: Application;
    
        /* inicializa el servidor-->app  */
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    /* configurar servidor app-->puertos, uso de modulos morgan y cors,
      que el servidor acepte formatos del tipo json enviadas por cliente(angular) */
    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    /* configurar servidor  --> app le doy las rutas   */
    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    /* inicializar el servidor--> app comienza a escuchar(listen) en un puerto dado */
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

/* Instancio un Server y lo guardo en server, luego lo inicializo(star)   */
const server = new Server();
server.start();