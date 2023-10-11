import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { config } from 'dotenv'
import app from './app.js'

// Configuración para que funcione el import de dotenv
config({ path: join(dirname(fileURLToPath(import.meta.url)), '../../.env')})

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))
