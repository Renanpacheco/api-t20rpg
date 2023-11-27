const express = require('express')
const controller = require('../controllers/control')

const router = express.Router()


router.get("/", controller.getControl) // takes all characters
//router.get("/character/:id") //takes a character with the id
router.post("/character", controller.createSheet) // create a character sheet
router.delete("/character", controller.delete) // delete a character by name on body
router.put("/chearacter/:id", controller.updateSheet) //edit a character sheet by id
//router.delete("/character/:id", controller.delete) // delete a character by id

module.exports = router
