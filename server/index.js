const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const advertisementRouter = require('./advertisement/router')

const app = express()
const port = process.env.PORT || 4000
const corsMiddleware = cors()
const parseMiddleware = bodyParser.json()

app.use(corsMiddleware)
app.use(parseMiddleware)
app.use(advertisementRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))
