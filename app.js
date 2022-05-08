const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const local = require('./strategies/local');
const userRouter = require('./routes/user')


require('./src/db').setup();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('dist'));

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

// const gridDisplayObj = {
//     rowOneImageOne: 'asdf',
// 	rowOneImageTwo: '',
// 	rowOneImageThree: '',
// 	rowTwoImageOne: '',
// 	rowTwoImageTwo: '',
// 	rowTwoImageThree: ''
// }


app.use(function(req, res, next) {
    res.locals.gridDisplay = userRouter.gridDisplay
    next()
})

console.log(userRouter.gridDisplay)





app.get('/', function (req, res) {
    res.redirect('/home');
});

app.use('/login', require('./routes/login'));
app.use('/home', require('./routes/home'));
app.use('/registration', require('./routes/registration'));
app.use('/user', userRouter.router);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}.`);
});
