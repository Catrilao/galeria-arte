import pool from '../database/database.js'

export class Consulta {
  getClientes = async (req, res) => {
    try {
      const [clientes] = await pool.query('SELECT * FROM cliente;')
      res.json(clientes)
    } catch (error) {
      this.manejarError(error, res)
    }
  }

  getArtistas = async (req, res) => {
    try {
      const [artistas] = await pool.query('SELECT * FROM artista;')
      res.json(artistas)
    } catch (error) {
      this.manejarError(error, res)
    }
  }

  getObras = async (req, res) => {
    try {
      const [obra] = await pool.query('SELECT * FROM obra;')
      res.json(obra)
    } catch (error) {
      this.manejarError(error, res)
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
      this.manejarError(error, res)
    }
  }

  getObrasArtista = async (req, res) => {
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
      this.manejarError(error, res)
    }
  }

  manejarError = (error, res) => {
    console.log('Error al ejecutar la consulta:', error)
    res.status(500).send('Error al ejecutar la consulta')
  }
}

export default Consulta
