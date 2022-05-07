const express = require('express');
const router = express.Router();
const User = require('../src/db').UserModel;
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
	res.render('registration/registration', {  });
})

router.get('/error', (req, res) => {
	res.send('error');
})



router.post('/', async (req, res) => {
	const hashedPassword = await bcrypt.hash(req.body.password, 10);
	const newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: hashedPassword
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