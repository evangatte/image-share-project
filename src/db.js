const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let db;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})


const ProductSchema = new Schema({
    ID: String,
    name: String
});

const FileSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: [true, 'Uploaded file must have name'],
    },
})

exports.ProductModel = mongoose.model('Product', ProductSchema);
exports.UserModel = mongoose.model('User', userSchema);
exports.FileModel = mongoose.model('File', FileSchema)

exports.setup = function setup() {
    if (db) {
        return;
    }

    var mongoDB = 'mongodb://127.0.0.1/buySellDb';
    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

    //Get the default connection
    db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
