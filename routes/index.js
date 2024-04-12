const express =require('express')
const router = express.Router()
const randomWyrQuestion = require('../model/wyr') 

router.get('/wyr' ,function(req, res, next){
    const wyr = {
        'question': 'live in a house shaped like a triagle or house shaped like a circle?',
        'answer1': 'Triagle house',
        'answer2':  'Circle house'  
    }
    res.json(wyr)
})

module.exports= router