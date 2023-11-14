let Post = require('../models/post')


exports.getControl = (req, res) => {
    res.json({
        posts: [
            { title: "First post"},
            { title: "Second post"},
            { title: "Third post"}
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    //console.log("creating Post: ", post)
    console.log("creating Post: ", req.body)
    post.save()
    res.status(200).json({
        post: "Sucess"
    })
};

