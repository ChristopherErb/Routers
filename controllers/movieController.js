//blah

const { Movie } = require(`../models`)
const movieSchema = require(`../models/movie`)





const getMovies = async (req, res) =>
{

    const movies = await Movie.find({})
    res.send(movies)
}

const getMovie = async (req, res) =>
{
    const movies = await Movie.find({})
    res.send(movies[req.params.id])
}







module.exports =
{
    getMovies,
    getMovie
}