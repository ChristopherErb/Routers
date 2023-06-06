const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
//must import when using stuff
const { Movie, Actor, Review } = require('./models')
const app = express()
const actorController = require('./controllers/actorController.js')
const movieController = require('./controllers/movieController.js')
const reviewController = require('./controllers/reviewController.js')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get('/', (req, res) => 
{
    res.send('thisis root')
})


app.get('/actors', actorController.getActors)
app.get('/actors/:id', actorController.getActor)




app.get('/movies', movieController.getMovies)
app.get('/movies/:id', movieController.getMovie)


//app.get('/reviews', reviewController.getReviews)
//app.get('/reviews/:id', reviewController.getReview)


app.listen(PORT, () =>
{
    console.log(`express server on ${PORT}`)
})


