import mysql from 'mysql2/promise'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

// Configuración para que funcione el import de dotenv
config({ path: join(dirname(fileURLToPath(import.meta.url)), '../../.env') })


const DEFAULT_CONFIG = {
  HOST: 'localhost',
  USER: 'root',
  DATABASE: 'galeria_arte',
  PASSWORD: '',
}

const connectionString = process.env.DATABASE_URL || DEFAULT_CONFIG

const pool = mysql.createPool(connectionString)

export default pool
