const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/task-manager-api';
const validator = require('validator')
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
       type: Boolean,
       default: false
    },
});

// const me = new User({
//     name: 'Billy',
//     age: 24
// })
module.exports = Task;