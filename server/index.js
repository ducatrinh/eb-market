const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRouter = require('./auth/router')
const advertisementRouter = require('./advertisement/router')
const userRouter = require('./user/router')

const app = express()
const port = process.env.PORT || 4000
const corsMiddleware = cors()
const parseMiddleware = bodyParser.json()

app.use(corsMiddleware)
app.use(parseMiddleware)
app.use(authRouter)
app.use(advertisementRouter)
app.use(userRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))
