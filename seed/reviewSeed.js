const db = require('../db')
const { Actor, Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () =>
{
    const idiocracy = await Movie.find({name:'Idiocracy'})
    const montyPython = await Movie.find({name:`Monty Python and the Holy Grail`})
    const bigLebowski = await Movie.find({name:'Monty Python and the Holy Grail'})
    const superMario = await Movie.find({name:'The Super Mario Bros. Movie'})
    const pokemon = await Movie.find({name:`Pokémon: Detective Pikachu`})

const reviews = [
    {
        movieId:pokemon[0]._id,
        score: 5 ,
        comment: `It's a pokemon movie`
    },
    {
        movieId:pokemon[0]._id,
        score: 10,
        comment: `best Pokemon movie ever`
    },
    {
        movieId:superMario[0]._id,
        score: 1 ,
        comment: `Who watches this`
    },
    {
        movieId:superMario[0]._id,
        score: 10 ,
        comment: `It changed my life`
    },
    {
        movieId:bigLebowski[0]._id,
        score: 7 ,
        comment: `duuuude`
    },
    {
        movieId:bigLebowski[0]._id,
        score: 2 ,
        comment: `i hate bowling`
    },
    {
        movieId:montyPython[0]._id,
        score: 10 ,
        comment: `NOW WE SEE THE CORRUPTING INHERENT IN THE SYSTEM`
    },
    {
        movieId:montyPython[0]._id,
        score: 8 ,
        comment: `We are all soil farmers at heart`
    },
    {
        movieId:idiocracy[0]._id,
        score: 10 ,
        comment: `The prophecy has been fulfilled`
    },
    {
        movieId:idiocracy[0]._id,
        score: 10,
        comment: `oh i like money`
    }]

    await Review.insertMany(reviews)
}

const run = async() => 
{
    await main()
    db.close()
}

run()

