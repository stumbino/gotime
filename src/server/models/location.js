const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/gotimedb';
const validator = require('validator')
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true })

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