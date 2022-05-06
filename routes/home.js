const express = require('express');
const router = express.Router();
const User = require('../src/db').UserModel

router.get('/', (req, res) => {
	res.render('home/home')
})

router.get('/registration-error', (req, res) => {
	res.send('registration error')
})






module.exports = router;