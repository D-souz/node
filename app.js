const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/users', (req, res) => {
  res.json([{name: 'Nobert'},{name: 'Chris'}])
})

app.get('/admins', (req, res) => {
  res.send('Hello admins!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})