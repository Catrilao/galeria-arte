import pool from '../database/database.js'

export class Consulta {
  getClientes = async (_, res) => {
    try {
      const [clientes] = await pool.query('SELECT * FROM cliente;')
      res.json(clientes)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }

  getArtistas = async (_, res) => {
    try {
      const [artistas] = await pool.query('SELECT * FROM artista;')
      res.json(artistas)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }

  getObras = async (_, res) => {
    try {
      const [obra] = await pool.query('SELECT * FROM obra;')
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

  getObrasArtista = async (_, res) => {
    try {
      const [datos] = await pool.query(
        'SELECT a.nombre_artista, o.titulo, o.anio_creacion, o.precio, o.anio_creacion, i.ruta ' +
        'FROM artista a ' +
        'JOIN artista_obra ao ON a.id_artista = ao.id_artista ' +
        'JOIN obra o ON o.id_obra = ao.id_obra ' +
        'JOIN imagen i ON i.id_obra = o.id_obra;'
      )
      res.json(datos)
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }

  createCliente = async (req, res) => {
    const { nombre, correo, contrasenia } = req.body
    try {
      await pool.query(
        'INSERT INTO cliente (nombre_cliente, correo_cliente, contrasenia_cliente) VALUES (?, ?, ?);',
        [nombre, correo, contrasenia]
      )

      res.status(201).json('Cliente agregado correctamente')
    } catch (error) {
      console.log('Error al ejecutar la consulta:', error)
      res.status(500).send('Error al ejecutar la consulta')
    }
  }
}
