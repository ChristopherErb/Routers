const { Schema } = require('mongoose')

const reviewSchema = new Schema 
({
score: {type: Number, required: true},
comment: {type: String, required: true},
movieId: {type: Schema.Types.ObjectId, ref: 'Movie'}
},

{timestamps: true}
)

module.exports = reviewSchema