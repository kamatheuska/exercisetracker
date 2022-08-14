const express = require('express')
const app = express()
const cors = require('cors')
const md5 = require('md5')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

const users = []

function createUser(username) {
  const _id = md5(username + Date.now())
  return {
    _id,
    username,
  }
}

app.post('/api/users', (req, res) => {
  const { username } = req.body
  const user = createUser(username)
  console.log(user)

  res.send(user)
})



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
