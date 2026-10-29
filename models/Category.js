const mongoose = require('mongoose')

// Schema
const categorySchema = new mongoose.Schema({
    categoryName:{
        type: String
    }
},{timestamps: true})
// model
const Category = mongoose.model("Category", categorySchema )

// export
module.exports = Category
