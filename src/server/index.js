const express = require('express');
const os = require('os');
const User = require('./models/user')
const app = express();
const Task = require('./models/task')
app.use(express.json())
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.post('/task', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.send(task)
    }).catch((e) => {
        res.status(400);
        res.send(e);
    })
})
app.listen(process.env.PORT || 9090, () => console.log(`Listening on port ${process.env.PORT || 9090}!`));
