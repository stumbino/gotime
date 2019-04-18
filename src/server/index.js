const express = require('express');
require('./db/mongoose.js');
const os = require('os');
const Location = require('./models/location')
const app = express();
//const axios = require('axios')
app.use(express.json())
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// app.post('/task', (req, res) => {
//     const task = new Task(req.body)
//     task.save().then(() => {
//         res.send(task)
//     }).catch((e) => {
//         res.status(400);
//         res.send(e);
//     })
// })
app.post('/api/location', (req, res) => {
    const location = new Location(req.body)
    location.save().then(() => {
        res.send(location)
    }).catch((e) => {
        res.status(400);
        res.send(e);
    })
})
app.get('/api/getLocation', (req, res) => {
    Location.find({}).then((data) => {
        res.send(data);
    }).catch((e) => {
        res.send(e);
    })
    //location.find({}).then()
});

// app.get('/api/location', (req, res) => {
//     axios.get('https://api.predicthq.com/v1/events/?location_around.origin=40.730610,-73.935242', {'headers': {'Accept': 'application/json', 'Authorization':'Bearer ofv44QQlFBvSqNxKpismQaB89IdrsZ0'}})
//     .then((response) => {
//         res.send(response.data);
//         console.log(response.data);
//     }).catch((error)=>{
//         res.status(404);
//         res.send(error);
//     })
// })
app.listen(process.env.PORT || 9090, () => console.log(`Listening on port ${process.env.PORT || 9090}!`));
