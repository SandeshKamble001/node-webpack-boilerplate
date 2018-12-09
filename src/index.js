import http from 'http'
import express from 'express'

const port = 3000

const app = express()

const server = http.createServer(app)

server.listen(port, () => {
  console.log('Listening on: ', port) // eslint-disable-line
})
