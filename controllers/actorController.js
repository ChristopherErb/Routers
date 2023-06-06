//Controller must import, have schema

const { Actor } = require(`../models`)
const actorSchema = require('../models/actor')


//functions must be async for await to work


const getActors = async (req, res) => 
{
    const actors = await Actor.find({})
    res.send(actors)
  }

const getActor = async (req, res) =>
{
    const actors = await Actor.find({})
    res.send(actors[req.params.id])
}







module.exports =
{
    getActors,
    getActor
}