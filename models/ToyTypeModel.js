// ToyTypeModel.js
const mongoose = require('mongoose');

const ToyTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const ToyTypeModel = mongoose.model('ToyType', ToyTypeSchema);

module.exports = ToyTypeModel;
