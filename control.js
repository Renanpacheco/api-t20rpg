const { ObjectId } = require('mongodb');
const Post = require('../models/post')


exports.getControl = (req, res) => {
    const posts = Post.find().select("_id name")
    .then(posts => {
        res. json({posts})
    })
    .catch(err=>console.log(err))
};

exports.createSheet = (req, res) => {
    const post = new Post(req.body)
    console.log("creating Post: ", req.body)
    post.save()
    res.status(200).json({
        post: "Sucess"
    })
};

exports.delete = async(req, res) => {
    try{
        //const aux = await Post.find
        await Post.deleteOne({ name : 'Bun'})
        

    }catch(err){
        res.json(err)

    }
    
    
};
