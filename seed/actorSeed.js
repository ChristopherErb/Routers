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


    const actors = [

        {
            name: 'Luke Wilson',
            age: 51,
            isAlive: true,
            movieId:idiocracy[0]._id
            
        },
        {
            name: 'Terry Crews',
            age: 54,
            isAlive: true,
            movieId:idiocracy[0]._id
        },
        {
            name: 'Dax Shepard',
            age: 48,
            isAlive: true,
            movieId:idiocracy[0]._id
        },
        {
            name: 'Chris Pratt',
            age: 43,
            isAlive: true,
            movieId:superMario[0]._id
        },
        {
            name: 'Graham Chapman',
            age: 48,
            isAlive: false ,
            movieId:montyPython[0]._id
        },
        {
            name: 'John Cleese',
            age: 83,
            isAlive: true,
            movieId:montyPython[0]._id
        },
        {
            name: 'John Goodman',
            age: 70,
            isAlive: true,
            movieId:bigLebowski[0]._id
        },
        {
            name: 'Jack Black',
            age: 53,
            isAlive: true,
            movieId:superMario[0]._id
        },
        {
            name: 'Charlie Day',
            age: 47,
            isAlive: true,
            movieId:superMario[0]._id
        },
        {
            name: 'Ryan Reynolds',
            age: 47,
            isAlive: true,
            movieId:pokemon[0]._id
        }]

        await Actor.insertMany(actors)
}

const run = async() =>
{
    await main()
    db.close()
}

run()

