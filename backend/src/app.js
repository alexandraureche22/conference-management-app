const express = require('express')
const cors = require('cors')

const conferenceRoutes = require('./routes/conferenceRoutes')
const paperRoutes = require('./routes/paperRoutes')
<<<<<<< HEAD
const userRoutes = require('./routes/userRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const updateReview = require('./routes/reviewRoutes')
=======
const reviewRoutes = require('./routes/reviewRoutes')
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407

const app = express()

app.use(cors())
app.use(express.json())

app.use('/conferences', conferenceRoutes)
app.use('/papers', paperRoutes)
<<<<<<< HEAD
app.use('/users', userRoutes)
app.use('/reviews', reviewRoutes)
app.use('/reviews', updateReview)
=======
app.use('/reviews', reviewRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Conference API running' })
})

>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
module.exports = app
