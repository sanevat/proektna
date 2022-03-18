const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
app.use(morgan('tiny'));
const bodyParser = require('body-parser');
mongoose.connect('mongodb://admin:admin123@cluster0-shard-00-00.aljgt.mongodb.net:27017,cluster0-shard-00-01.aljgt.mongodb.net:27017,cluster0-shard-00-02.aljgt.mongodb.net:27017/users?ssl=true&replicaSet=atlas-q9047h-shard-0&authSource=admin&retryWrites=true&w=majority')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
    console.log("connected succesfully");
})
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            radio: req.body.radio,
        })
        res.json(req.body);
    } catch (error) {
        res.json({ status: 'error', error: 'Duplicate email' });
    }
})
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
        radio: req.body.radio
    })
    if (user) {
        const token = jwt.sign({
            name: user.name,
            email: user.email,
            radio: user.radio

        }, 'secret123');
        return res.json({ status: 'ok', user: token });
    } else {
        return res.json({ status: 'error', user: false });
    }
})
app.post('/stored', (req, res) => {
    console.log(req.body);
    db.collection('users').insertOne(req.body, (err, data) => {
        if (err) return console.log(err);
        res.send((data));
    })
})
const routes = require('./router/routes');
app.use(routes);
app.listen(1337, () => {
    console.log("Listening");
})

