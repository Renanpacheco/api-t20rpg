const { ObjectId } = require('mongodb');
let Post = require('../models/post')


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
        await Post.deleteOne({"_id" : ObjectId("6554d909c2d1730a56d1b3f3")})
        

    }catch(err){
        res.json(err)

    }
    
    
};
