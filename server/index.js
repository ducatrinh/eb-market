const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const userRouter = require('./user/router')
const login = require('./auth/router')
const router = require('./user/router')
const parseMiddleware = bodyParser.json()
const cors = require('cors')


app.use(userRouter)

app.listen(port, () => console.log('Listening to port 4000'))