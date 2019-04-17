const express = require('express');
const router = express.Router();
const Dogs = require('../models/Dogs');

router.get('/', (req, res) => {
    // res.send('you did it!!!');
    Dogs.find({}, (err, foundAllDogs) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('index.ejs', {dogs: foundAllDogs});
        }
    })
});


module.exports = router;