import { randomUUID } from 'crypto'
import pool from '../database/database.js'
import hash from '../hash/hash.js'
export class Consultas {
  static async getClientes () {
    try {
      const [clientes] = await pool.query('SELECT * FROM cliente;')
      return clientes
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }

  static async getArtistas () {
    try {
      const [artistas] = await pool.query('SELECT * FROM artista;')
      return artistas
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }

  static async getObras () {
    try {
      const [obras] = await pool.query('SELECT * FROM obra;')
      return obras
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }

  // TODO agregar id_obra a la consulta
  static async getImagenes ({ id }) {
    try {
      const [imagenes] = await pool.query(
        'SELECT * FROM imagen WHERE id_obra = ?;',
        [id]
      )
      return imagenes
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }

  static async getObrasArtista () {
    try {
      const [datos] = await pool.query(
      `SELECT a.nombre, o.titulo, o.anio_creacion, o.precio, o.anio_creacion, i.ruta
        FROM artista a
        JOIN artista_obra ao ON a.id = ao.id_artista
        JOIN obra o ON o.id = ao.id_obra
        JOIN imagen i ON i.id_imagen = o.id;`
      )
      return datos
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }

  static async createCliente ({ datosCliente }) {
    const id = randomUUID()
    const { nombre, correo, contrasenia } = datosCliente
    const hashedPassword = await hash(contrasenia)

    console.log({
      id,
      nombre,
      correo,
      contrasenia: hashedPassword,
      largoId: id.length,
      largoPass: hashedPassword.length
    })

    try {
      await pool.query(
        'INSERT INTO cliente (id, nombre, correo, contrasenia) VALUES (?, ?, ?, ?);',
        [id, nombre, correo, hashedPassword]
      )

      const [cliente] = await pool.query(`SELECT * FROM cliente WHERE id = '${id}';`)
      return cliente
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }
}
