var mongoose = require('mongoose');
var RegisterSchema = mongoose.Schema(
    {
        username : {
            type : String,
            unique : true,
            required : [true, 'Username can not be empty']
        },
        name : {
            type : String,
            required : [true, 'Name can not be empty']
        },
        email : {
            type : String,
            
              
        },
        password : {
            type : String,
            minlength : 6,
            required : [true, 'Password must be at least 6 characters']
        }
    }
)

var RegisterModel = mongoose.model('register', RegisterSchema, 'user');
module.exports = RegisterModel;