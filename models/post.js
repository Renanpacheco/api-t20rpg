const mongoose = require("mongoose")

const postSchema= new mongoose.Schema({
    title:{
        type: String,
        required: "Title is required",
        minlength: 5,
        maxlength: 50
    },
    body:{
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength: 50
    }
});

module.exports = mongoose.model("Post", postSchema);