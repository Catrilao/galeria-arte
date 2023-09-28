import mysql from 'mysql2/promise'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

// Configuración para que funcione el import de dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '../../.env') });


const DEFAULT_CONFIG = {
  HOST: 'localhost',
  USER: 'root',
  DATABASE: 'galeria_arte',
  PASSWORD: '',
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const pool = mysql.createPool(connectionString)

export class Consulta {
  getClientes = async (req, res) => {
    try {
      const [clientes] = await pool.query('SELECT * FROM cliente;')
      res.json(clientes)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }

  getArtistas = async (req, res) => {
    try {
      const [artistas] = await pool.query('SELECT * FROM artista;')
      res.json(artistas)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }

  getObras = async (req, res) => {
    try {
      const [obra] = await pool.query(
        'SELECT * FROM obra;'
      )
      res.json(obra)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }

  getImagenes = async (req, res) => {
    const { id } = req.params
    try {
      const [imagenes] = await pool.query(
        'SELECT * FROM imagen WHERE id_obra = ?;',
        [id]
      )
      res.json(imagenes)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }

  getObrasArtista = async (req, res) => {
    try {
      const [datos] = await pool.query(
        'SELECT a.nombre_artista, o.titulo, o.anio_creacion, o.precio, o.anio_creacion, i.ruta ' +
        'FROM artista a ' +
        'JOIN artista_obra ao ON a.id_artista = ao.id_artista ' +
        'JOIN obra o ON o.id_obra = ao.id_obra ' +
        'JOIN imagen i ON i.id_obra = o.id_obra;',
      )
      res.json(datos)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }
}
