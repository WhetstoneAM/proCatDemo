if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/waterbearimage', (req, res) => {
    res.sendFile(__dirname + '/public/other.html')
});

app.post('/waterbearimage', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let data = [];
    data.push(name, age);
    console.log(data);
    res.sendFile(__dirname + '/public/other.html')
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
