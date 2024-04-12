const express = require('express');
const router = express.Router();

router.get('/wyr', function(req, res, next) {
    const wyr = {
        'question': 'live in a house shaped like a triangle or house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    };
    res.json(wyr);
});

module.exports = router;
