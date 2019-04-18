const express = require('express')

const app = express()
const port = process.env.PORT || 3000;
const User = require('./models/user')
app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400);
        res.send(e);
1    })
})

app.listen(port, () => {
    console.log("Server is up on port" + port)
})
console.log('hello world');