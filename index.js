const express = require('express')
const app = express()
const rout=require("./routes/rout")

const mongo=require('mongoose')
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const dotenv = require('dotenv');
app.use(express.static("public"));

dotenv.config();

// your code goes here
 mongo.connect("mongodb+srv://shashi:shashi@12@cluster0.r8l6edo.mongodb.net/table?retryWrites=true&w=majority",()=>{console.log("connect to cloud db")});
 app.use("/",rout)

 app.get("*", (req, res) => {
    res.status(404).send("PAGE IS NOT FOUND");
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   