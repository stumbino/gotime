const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/task-manager-api';
const validator = require('validator')
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true })

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
       type: String,
       required: true,
       trim: true,
       lowercase: true,
       validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            } 
       } 
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age:{
        type: Number,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
});

// const me = new User({
//     name: 'Billy',
//     age: 24
// })
module.exports = User;