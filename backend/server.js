const express = require('express')
const app = express()
require('dotenv').config()


//Basic Routes
app.get("/", (req, res) => {
    res.json({mssg: "Hello World"})
})


app.listen(process.env.PORT, () => {
    console.log("Server listening on Port 4000")
})