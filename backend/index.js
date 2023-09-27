import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { config } from 'dotenv'
import { Consulta } from './consultas.js'

// Configuración para que funcione el import de dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '../.env') })

const corsOptions = {
  credentiasl: true,
  optionSuccessStatus:200,
  methods: "GET, PUT, POST, DELETE",
  origin: '*'
}

const app = express()
app.use(cors(corsOptions))


const consulta = new Consulta()

app.get('/clientes', consulta.getClientes)
app.get('/obras/:id', consulta.getObraId)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
})
