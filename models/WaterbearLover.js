const mongoose = require('mongoose');

const WaterbearLoverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('WaterbearLover', WaterbearLoverSchema);

