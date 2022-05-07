const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
	res.render('login/login')
})

router.post(
    '/',
    passport.authenticate('local', {
        successRedirect: '/user/account',
        failureRedirect: '/login',
    }),
);

router.get('/log-out', (req, res) => {
    req.logout();
    res.redirect('/');
});


module.exports = router;
