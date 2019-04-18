const express = require('express');
const router = express.Router();
const Dogs = require('../models/Dogs');


//MAKE INDEX
router.get('/', (req, res) => {
    Dogs.find({}, (err, foundAllDogs) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('index.ejs', {dogs: foundAllDogs});
        }
    })
});

//MAKE NEW VIEW
router.post('/', (req, res) => {
    Dogs.create(req.body, (err, madeNewDog) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(madeNewDog);
            res.redirect('/dogs');
        }
    })
})

router.get('/new', (req, res) => {
    res.render('new.ejs');
})

//DELETE DOG
router.delete('/:id', (req, res) => {
    Dogs.findByIdAndDelete(req.params.id, (err, deleteDog) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(deleteDog);
            res.redirect('/dogs');
        }
    })
})

//EDIT DOG
router.put('/:id', (req, res) => {
    Dogs.findByIdAndUpdate(req.params.id, req.body, (err, dogTradedIn) =>{
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect('/dogs');
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Dogs.findById(req.params.id, (err, foundDog) => {
        // res.send(foundDog);        
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(foundDog);
            res.render('edit.ejs', {
                dog: foundDog
                // id: req.params.id
            })
        }
    })
})

//SHOW DOG

router.get('/:id', (req, res) => {
    Dogs.findbyId(req.params.id, (err, foundDog) => {
        if(err){
            res.send(err);
        } else {
            console.log(typeof foundDog, 'foundDog');
            res.render('show.ejs', {
                dog: foundDog
            })
            // console.log(typeof foundDog, 'foundDog');
            // if(foundDog != null){
            //     res.render('show.ejs', {
            //         dog: foundDog
            //     });
            // } else {
            //     res.send('no dog found');
            }
        // }
    })
});



module.exports = router;