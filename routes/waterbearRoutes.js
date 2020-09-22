const router = require('express').Router();
const WaterbearLover = require('../models/WaterbearLover');

router.get('/', (req, res) => {
    res.render('layouts/form')
});

router.post('/waterbearimage', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let waterbearLover = new WaterbearLover({name, age});
    waterbearLover.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            let name = data.name;
            let age = data.age;
            res.render('layouts/other', { name, age })
        }
    }); 
});

module.exports = router;