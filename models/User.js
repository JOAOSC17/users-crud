const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add a name']
    },
    email:{
        type:String,
        required:[true, 'Please add a email']
    },
    age:{
        type:Number,
        required:[true, 'Please add a age']
    }
})
module.exports = mongoose.model.User || mongoose.model('User', UserSchema)