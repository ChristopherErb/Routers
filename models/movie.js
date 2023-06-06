const { Schema } = require('mongoose')

const movieSchema = new Schema ({
name:{ type: String, required: true},
runTime:{ type: Number, required: true},
rating: {type: Number, required: true},
year: { type: Number, required: true},
description: {type: String, required: true}

},
{timestamps:true}
)

module.exports = movieSchema