const db = require ('../db')
const { Actor, Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => 
{

    const movies = [
    {
        name: `Idiocracy`,
        runTime: 84,
        rating: 7,
        year: 2006,
        description: `Corporal Joe Bauers, a decisively average American, 
        is selected as a guinea pig for a top-secret hibernation
         program but is forgotten, awakening to a future so incredibly
          moronic he's easily the most intelligent person alive. `
    },

    {
        name: `Monty Python and the Holy Grail`,
        runTime:91,
        rating: 8 ,
        year: 1975 ,
        description: `King Arthur and his Knights of the Round Table 
        embark on a surreal, low-budget search for the Holy Grail,
         encountering many, very silly obstacles.`
    },

    {
        name: `The Big Lebowski`,
        runTime: 117,
        rating: 8 ,
        year:  1998,
        description: `Ultimate L.A. slacker Jeff "The Dude" Lebowski, 
        mistaken for a millionaire of the same name, seeks 
        restitution for a rug ruined by debt collectors, 
        enlisting his bowling buddies for help while trying 
        to find the millionaire's missing wife.`
    },
 
   
    {
        name: `The Super Mario Bros. Movie`,
        runTime: 92,
        rating: 7,
        year: 2023,
        description: `A plumber named Mario travels through an
         underground labyrinth with his brother, Luigi, trying 
         to save a captured princess.`
    },


    {
        name:`Pokémon: Detective Pikachu`,
        runTime:104,
        rating: 7,
        year: 2019,
        description: `In a world where people collect Pokémon 
        to do battle, a boy comes across an intelligent talking 
        Pikachu who seeks to be a detective.`
    }]

   await Movie.insertMany(movies)

}

const run = async() => 
{
    await main()
    db.close()
}

run()























