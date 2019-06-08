/* es el modulo de conexion permite conectar BD mySql con el
servidor de node, ademas soporta promesas  */
import mysql from 'promise-mysql';

/* Importar la configuracion (seguridad,nombre de BD,puerto) de la base de datos  */
import keys from './keys';

/*  le proporciono al conector de mysql la 
configuracion para el acceso a la Base de datos MYSQL y 
me permite iniciar la conexion  */
const pool = mysql.createPool(keys.database);

/*  Solicito la conexion a la BD MYSQL, si existe la conexion es aceptada, 
 desde pool voy a lanzar la conexion    */ 
pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

/*  exporta  pool que me permite acceso a la BD   */    
export default pool;
