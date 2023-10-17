import { Router } from 'express'
import { ConsultasController } from '../controllers/consultasController.js'
import { Consultas } from '../models/mysql.js'

const router = Router()
const consultasController = new ConsultasController({ Consultas })

router.get('/clientes', consultasController.getClientes)
router.get('/artistas', consultasController.getArtistas)
router.get('/obras', consultasController.getObras)
router.get('/obrasArtista', consultasController.getObrasArtista)
router.get('/imagenes/:id', consultasController.getImagenes)

router.post('/clientes', consultasController.createCliente)

export default router
