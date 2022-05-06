const express = require('express');
const router = express.Router();
const User = require('../src/db').UserModel


router.get('/', (req, res) => {
	res.render('registration/registration', {  })
})

router.get('/error', (req, res) => {
	res.send('error');
})



router.post('/', async (req, res) => {
	const newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	})
	try {
		const user =  await newUser.save();
		res.redirect('/home');
	} catch (e) {
		console.log(e.message);
		res.render('registration/registration', { user: newUser })	
	}

})







module.exports = router;