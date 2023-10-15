import CONFIGURACION_BD from './constants/constants.js'
import app from './app.js'

app.listen(CONFIGURACION_BD.RUN_PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${CONFIGURACION_BD.RUN_PORT}`)
})
