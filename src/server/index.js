const express = require('express');
require('./db/mongoose.js');
const os = require('os');
const EventItem = require('./models/eventitem')
const app = express();
//const axios = require('axios')
app.use(express.json())
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.post('/api/postEvent', (req, res) => {
    const eventItem = new EventItem(req.body)
    eventItem.save().then(() => {
        res.send(eventItem)
    }).catch((e) => {
        res.status(400);
        res.send(e);
    })
})
app.get('/api/getEvents', (req, res) => {
    EventItem.find({}).then((data) => {
        res.send(data);
    }).catch((e) => {
        res.send(e);
    })
});

app.listen(process.env.PORT || 9090, () => console.log(`Listening on port ${process.env.PORT || 9090}!`));
