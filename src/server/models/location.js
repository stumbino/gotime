const mongoose = require('mongoose')
const validator = require('validator')
const Location = mongoose.model('Location', {
    id: {
       type: String
    },
    title: {
       type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String
    },
    start:{
        type: Date,
    },
    end:{
        type: Date,
    },
    timezone:{
        type: String,
    },
    lat:{ 
        type: Number,
    },
    long:{
        type: Number,
    }
});

// const me = new User({
//     name: 'Billy',
//     age: 24
// })
module.exports = Location;