const mongoose = require('mongoose');

const dogsSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    breed: String,
    loves: [String],
    ownerName: String,
    age: Number
});

const Dogs = mongoose.model('Dogs', dogsSchema);
module.exports = Dogs;