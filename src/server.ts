import express from 'express'
import mongoose from 'mongoose'

import { config } from './config/config'
import routes from './routes'

const app = express()

// Connect db
mongoose.connect(config.mongo.url).then(() => { console.log('MongoDB connect Cluster Atlas DB') }).catch((err) => { console.log(err) })

app.use(express.json())

app.use(routes)

app.listen(config.server.port, () => {
  console.log(`Server is listening ${config.server.port}`)
})
