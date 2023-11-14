const express = require('express')
const postController = require('../controllers/control')

const router = express.Router()

router.get("/", postController.getControl)
router.post("/post", postController.createPost)



module.exports = router
