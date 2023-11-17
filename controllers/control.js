let Post = require('../models/post')


exports.getControl = (req, res) => {
    const posts = Post.find().select("_id title")
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

/*exports.deleteAll = (req, res) => {
    const exclude = Post.find().select("_id");
    fetch(exclude, { method:'DELETE'})
};*/
