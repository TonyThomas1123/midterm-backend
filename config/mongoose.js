const db = require('./config/mongoose');

// Connect to the database
db();


// Database setup
const mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(config.ATLASDB);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log("====> Connected to MongoDB.");
    })
}