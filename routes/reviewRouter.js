const Router = require('express').Router()
const controller = require('../controllers/reviewController')

Router.get('/reviews', controller.getReviews)  
Router.get('/reviews/:id', controller.getReview)





Router.post('/reviews', controller.createReviews)


module.exports = Router