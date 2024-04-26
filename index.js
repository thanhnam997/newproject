
// Import the Express module
const express = require('express')
// Create a router instance
const router = express.Router()
// Require the 'randomWyrQuestion' function from the local module 'wyr_question.js'
const randomWyrQuestion = require('./wyr_question.js')
// Define a route handler for GET requests to '/wyr'
router.get('/wyr', function(req, res, next) {
    // Call the 'randomWyrQuestion' function to get a random WYR question
    const wyrQuestion = randomWyrQuestion()
    // Send the randomly chosen WYR question as a JSON response
    res.json(wyrQuestion)
})
// Export the router so it can be used in other files
module.exports = router

