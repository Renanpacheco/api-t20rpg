const mongoose = require("mongoose")

const postSchema= new mongoose.Schema({
    name:{
        type: String,
        required: "Name is required",
        minlength: 2,
        maxlength: 50
    },
    class:{
        type: String,
        required: "class is required",
        minlength: 2,
        maxlength: 50
    },
    level:{
        type: Number,
        required: "level is required"
    },
    strengh:{
        type: Number,
        required: "strengh is required"
    },
    dexterity:{
        type: Number,
        required: "desterity is required"
    },
    constitution:{
        type: Number,
        required: "constitution is required"
    },
    inteligence:{
        type: Number,
        required: "inteligence is required"
    },
    wisdow:{
        type: Number,

        required: "wisdow is required"
    },
    charisma:{
        type: Number,
        required: "charisma is required"
    }
});

module.exports = mongoose.model("Post", postSchema);