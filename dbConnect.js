const mongoose = require('mongoose')
const URL = 'mongodb+srv://hungry_bear:hungry_bear@cluster0.8oki3.mongodb.net/HungryBear'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected', () => {
    console.log("mongoose connetcion succesfull");
})
connectionObj.on('error', () => {
    console.log("mongoose connetcion failed");
})



