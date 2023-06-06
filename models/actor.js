const { Schema } = require ('mongoose')

const actorSchema = new Schema(
{
    name: { type: String, required: true},
    age: { type: Number, required: true},
    isAlive: { type: Boolean, required: true },
    movieId: {type: Schema.Types.ObjectId, ref: 'Movie'}
},
{timestamps: true})

module.exports = actorSchema