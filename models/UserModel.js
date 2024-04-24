var mongoose = require('mongoose');
var UserSchema = mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : [true, 'Username can not be empty']
        },
        password : {
            type : String,
            minlength : 6,
            required : [true, 'Password must be at least 6 characters']
        }
    }
)

var UserModel = mongoose.model('user', UserSchema, 'user');
module.exports = UserModel;