import mysql from 'mysql2/promise'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

// Configuración para que funcione el import de dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '../.env') })

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

  getObraId = async (req, res) => {
    try {
      const [obra] = await pool.query('SELECT * FROM obra WHERE id_obra = ?', [req.params.id])
      res.json(obra)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }
}