import express from 'express'
import router from './routes/Router.js'
import cors from './middlewares/cors.js'

const app = express()

app.use(cors)
app.use(router)

export default app
