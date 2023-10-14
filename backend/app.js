import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/Router.js'
import cors from './middlewares/cors.js'

const app = express()

app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

export default app
