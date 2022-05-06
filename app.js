const express = require('express');
const app = express();

require('./src/db').setup();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.redirect('/home');
});

app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));
app.use('/registration', require('./routes/registration'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}.`);
});
