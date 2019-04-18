const mongoose = require('mongoose')
const validator = require('validator')
const EventItem = mongoose.model('Events', {
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
    startTime:{
        type: String,
    },
    date: {
        type: Date
    },
    organizer: {
        type: String
    }
});

module.exports = EventItem;
