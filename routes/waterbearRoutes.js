const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('layouts/form')
});

router.post('/waterbearimage', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let data = [];
    data.push(name, age);
    console.log(data);
    res.render('layouts/other', { name, age })
});

module.exports = router;