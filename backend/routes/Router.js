import { Router } from 'express'
import { Consulta } from '../database/database.js'

const consulta = new Consulta()
const router = Router()

router.get('/clientes', consulta.getClientes)
router.get('/artistas', consulta.getArtistas)
router.get('/obras', consulta.getObras)
router.get('/obrasArtista', consulta.getObrasArtista)

router.get('/imagenes/:id', consulta.getImagenes)

export default router
