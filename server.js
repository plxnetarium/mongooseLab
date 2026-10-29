// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')
const User = require('./models/User')
const Listing = require('./models/Listing')
const Review = require('./models/Review')
const Category = require('./models/Category')






// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB() { //connection to the database
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


conntectToDB()


















// Routes go here

async function newUser() {
    const newUser = await User.create({
        username: 'AmalAlSaegh',
        password: 'P@$$w0Rd'
    })
}
// newUser()
async function newCategory() {
    const newUser = await Category.create({
        categoryName:'Apartments'
    })
}
//newCategory()


async function newListing() {
    const newListing = await Listing.create({
        streetAddress: 'Block10',
        city: 'Sar',
        price: 200,
        size: 200,
        owner: '6ae32e39bd10d8e6287f802e',
        category: '6ae331336aa57a77adc89ad7'
    })
}

//newListing()


async function getAllListings(){
    const foundListing = await Listing.find()
    console.log(foundListing)
}
//getAllListings()

async function populateFun(){
    const allListing = await Listing.find().populate('owner')
    console.log(allListing)
}

populateFun()




app.listen(3000, () => {
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
