//const { ObjectId } = require('mongodb');
const Post = require('../models/post')
//let character =

exports.getControl = (req, res) => {  // takes all characters
    const posts = Post.find().select("_id name charisma")
    .then(posts => {
        res. json({posts})
    })
    .catch(err=>console.log(err))
};

exports.createSheet = (req, res) => { // create a character sheet
    const post = new Post(req.body)
    console.log("creating Post: ", req.body)
    post.save()
    res.status(200).json({
        post: "Sucess"
    })
};

exports.delete = async(req, res) => { // delete a character by name on body
    try{
        //const aux = await Post.find
        //await Post.deleteOne({ name : 'Bun'})
        await Post.deleteOne(req.body) 
        //Post.deteleOne(req.params.id)
        //Post.deleteOne(req.body)       

    }catch(err){
        res.json(err)

    }    
    
};

exports.updateSheet = (req, res) =>{ //edit a character sheet by id
    const characterName = {name: 'Monk'}
    const update = req.body
    console.log(update)

    const doc = Post.findOneAndUpdate(characterName, update, {new: true});
    //doc.save()
    res.status(200).json({
        post: "Sucess"
    })
};
