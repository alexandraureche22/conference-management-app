const express = require('express')
const cors = require('cors')

const conferenceRoutes = require('./routes/conferenceRoutes')
const paperRoutes = require('./routes/paperRoutes')
const reviewRoutes = require('./routes/reviewRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/conferences', conferenceRoutes)
app.use('/papers', paperRoutes)
app.use('/reviews', reviewRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Conference API running' })
})

module.exports = app
