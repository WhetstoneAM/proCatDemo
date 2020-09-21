if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("hello");
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
