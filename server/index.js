const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');



mongoose.connect('mongodb://localhost:27017/reef-buddy');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error"));
db.once('open', () => {
    console.log("Connected to database!");
})


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('trust proxy', 1);

//Session Store here
app.use(session({
    secret: 'tempsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    }
}))
//
const reefRoutes = require('../routes/reefs');
const userRoutes = require('../routes/users');
const postRoutes = require('../routes/posts');

app.use('/reefs', reefRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);

app.get('/home', (req, res) => {
    console.log(req.session)
    req.session.test = "HELLO";
    console.log(req.session);
    res.send("Works!");
})


app.use((err, req, res, next) => {
    console.log("Here are the errors: ", err._message);
    res.status(404).send("File not found");
})

const PORT = process.env.PORT | 3001;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
