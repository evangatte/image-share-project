const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const User = require('../src/db').UserModel;
const File = require('../src/db').FileModel


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const randomInt = getRandomInt(100);


//multer configuration
const multerStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "dist");
	},
	filename: (req, file, cb) => {
		const ext = file.mimetype.split("/")[1];
		cb(null, `uploades/new${randomInt}.${ext}`);
	},
});

const multerFilter = (req, file, cb) => {
	if (file.mimetype.split("/")[1] === "pdf") {
	  cb(null, true);
	} else {
	  cb(new Error("Not a Image"), false);
	}
  };



const upload = multer({ storage: multerStorage, /*fileFilter: multerFilter */});
////////////////////////////////



router.get('/account', (req, res) => {
	res.render('user/account');
	if (res.locals.currentUser) {
		console.log('user logged in')
	} else {
		console.log('not logged in')
	}
})

router.get('/photo-panel', async (req, res) => {
	const photos = await File.find({  })
	res.render('user/photoPanel', { photos, photos });
})




router.post('/upload', upload.single('testImage'), async (req, res) => {
	const newFile = new File({
		name: req.file.filename
	})
	await newFile.save()

	console.log(req.file.filename);
	res.redirect('/user/account');
})

let gridDisplay = {}

router.post('/grid-layout', (req, res) => {
	
		gridDisplay.rowOneImageOne = req.body.rowOneImageOneInput,
		gridDisplay.rowOneImageTwo = req.body.rowOneImageTwoInput,
		gridDisplay.rowOneImageThree = req.body.rowOneImageThreeInput,
	 	gridDisplay.rowTwoImageOne = req.body.rowTwoImageOneInput,
		gridDisplay.rowTwoImageTwo = req.body.rowTwoImageTwoInput,
		gridDisplay.rowTwoImageThree = req.body.rowTwoImageThreeInput		
	
		
	res.redirect('/user/photo-panel')
})

console.log(gridDisplay)


module.exports = {
	router: router,
	gridDisplay: gridDisplay
}