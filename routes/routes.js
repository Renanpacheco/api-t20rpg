const express = require('express')
const controller = require('../controllers/control')

const router = express.Router()


router.get("/", controller.getControl)
router.post("/create_sheet", controller.createSheet)
router.delete("/delete", controller.delete)


module.exports = router
