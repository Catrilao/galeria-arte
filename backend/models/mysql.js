import pool from '../database/database.js'

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
        'SELECT a.nombre_artista, o.titulo, o.anio_creacion, o.precio, o.anio_creacion, i.ruta ' +
        'FROM artista a ' +
        'JOIN artista_obra ao ON a.id_artista = ao.id_artista ' +
        'JOIN obra o ON o.id_obra = ao.id_obra ' +
        'JOIN imagen i ON i.id_obra = o.id_obra;'
      )
      return datos
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }

  static async createCliente ({ datosCliente }) {
    const { nombre, correo, contrasenia } = datosCliente
    try {
      await pool.query(
        'INSERT INTO cliente (nombre_cliente, correo_cliente, contrasenia_cliente) VALUES (?, ?, ?);',
        [nombre, correo, contrasenia]
      )
      return 'Cliente agregado correctamente'
    } catch (error) {
      throw new Error('Error al ejecutar la consulta:', error)
    }
  }
}
