const express = require('express')
const cors = require('cors')

const conferenceRoutes = require('./routes/conferenceRoutes')
const paperRoutes = require('./routes/paperRoutes')
const userRoutes = require('./routes/userRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const updateReview = require('./routes/reviewRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/conferences', conferenceRoutes)
app.use('/papers', paperRoutes)
app.use('/users', userRoutes)
app.use('/reviews', reviewRoutes)
app.use('/reviews', updateReview)
module.exports = app
