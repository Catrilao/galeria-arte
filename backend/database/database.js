import mysql from 'mysql2/promise'
import CONFIGURACION_BD from '../constants/constants.js'

<<<<<<< HEAD
const DEFAULT_CONFIG = {
  host: CONFIGURACION_BD.HOST,
  user: CONFIGURACION_BD.USER,
  database: CONFIGURACION_BD.DATABASE,
  password: CONFIGURACION_BD.PASSWORD
}

const connectionString = CONFIGURACION_BD.DATABASE_URL || DEFAULT_CONFIG

const pool = mysql.createPool(connectionString)
=======
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'galeria_arte',
  
});
>>>>>>> Fernanda

// Probamos la conexión
pool.getConnection()
  .then(conection => {
    console.log('Conectado correctamente a la base de datos')
    conection.release()
  })
  .catch(error => {
    console.log('Error al conectar a la base de datos')
    console.log(error)
  })

export default pool
