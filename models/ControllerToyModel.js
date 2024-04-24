var mongoose = require('mongoose');
var ControllerToySchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, 'Name can not be empty']
        },
        brand : {
            type : String,
            required : [true, 'Brand can not be empty']
        },
        price : {
            type : Number,
            required : [true, 'Price can not be empty']
        },
        quantity : {
            type : Number,
            min : 1,
            max : 100
        },
        image : String
    }
)

var ControllerToyModel = mongoose.model('controllertoy', ControllerToySchema, 'controllertoy');
module.exports = ControllerToyModel;