import { Router } from 'express'
import { Consulta } from '../controllers/consultas.js'

const consulta = new Consulta()
const router = Router()

router.get('/clientes', consulta.getClientes)
router.get('/artistas', consulta.getArtistas)
router.get('/obras', consulta.getObras)
router.get('/obrasArtista', consulta.getObrasArtista)
router.get('/imagenes/:id', consulta.getImagenes)

router.post('/clientes', consulta.createCliente)

export default router
