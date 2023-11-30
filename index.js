//MongoDB connect by instructions on site of MongoDB
const uri // Variable for your connection on mongo db


// external imports
const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


// internal exports
const postRoutes = require('./routes/routes') // brings in routes

// inicializations
const app = express()
//const port = 8080 // declaration of port outside .env
const port = process.env.PORT || 8080;
dotenv.config();

//DB
mongoose.connect(uri).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => console.log('DB connection error'))

// middleware
const myOwnMiddleware = (req, res, next) =>{
    console.log('Middleware applied') // if it is just this line the application never stops
    next();// this is a fix to grant to go to next page, but is not recommended
}
app.use(morgan('dev')) // used to listen alterations by log
app.use(myOwnMiddleware)

app.use(bodyParser.json())
app.use("/", postRoutes)

/*app.get("/post", postRoutes)
app.post("/post", postRoutes)
*/

app.listen(port, () => console.log('A Node Js API is listenin on port: '+ port ))
