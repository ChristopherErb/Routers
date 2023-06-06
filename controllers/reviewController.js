const { Review } = require('../models')
const reviewSchema = require('../models/review')

const getReviews = async (req, res) =>
{
    const reviews = await Review.find({})
    res.send(reviews)

}

const getReview = async (req, res) =>
{
    const reviews = await Review.find({})
    res.send(reviews[req.params.id])
}





module.exports =
{
    getReviews,
    getReview
}