'use strict'

const path = require('path')
const express = require('express')

const app = express()
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port)

console.log('Listening on port ' + port)
