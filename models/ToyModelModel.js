// ToyModelModel.js
const mongoose = require('mongoose');
const ToyTypeModel = require('./ToyTypeModel'); // Import the ToyTypeModel schema

const ToyModelSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name can not be empty']
    },
    size: String,
    material: {
        type: String,
        required: true
    },
    price: Number,
    quantity: {
        type: Number,
        min: 1,
        max: 100
    },
    image: String,
    toyType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ToyType' // Reference the ToyTypeModel schema
    }
});

const ToyModelModel = mongoose.model('ToyModel', ToyModelSchema);

module.exports = ToyModelModel;
