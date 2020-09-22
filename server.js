if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const layouts = require('express-ejs-layouts');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(layouts);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/page');

app.get('/', (req, res) => {
    res.render('layouts/form')
});

app.post('/waterbearimage', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let data = [];
    data.push(name, age);
    console.log(data);
    res.render('layouts/other', { name, age })
});

mongoose.connect(process.env.DATABASE_URI || process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => {
    console.log('The goose is loose baby');
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
});
