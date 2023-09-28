import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { config } from 'dotenv'
import app from '../index.js'

// Configuración para que funcione el import de dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '../../.env') });

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
})
