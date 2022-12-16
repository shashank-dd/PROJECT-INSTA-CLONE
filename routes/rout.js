const express = require('express');
const route = express.Router()
const bodyParser = require("body-parser");
route.use(bodyParser.urlencoded({ extended: true }))
route.use(bodyParser.json())



const multer = require("multer");
const cors = require("cors")
// const post = require("../model/model")
const { string, date } = require('joi');
const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const postschema = new mongooose.Schema({
    image: { type: String, required: true },
    auther: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },


})

const post = mongooose.model('uses', postschema);


let arr=[
    {
 
      image: '1671117119175Screenshot (15).png',
    
      auther: 'pp',
      location: 'aqqqq',
      description: 'gougu',
     
    },
    {
    
      image: '1671120676866Screenshot (13).png',
      auther: 'll',
      location: 'giug',
      description: 'bjubvi',
    
    },
    {
    
      image: '1671128620724Screenshot (13).png',
      auther: 'ppp',
      location: 'giug',
      description: 'gougu',
   
    },
    {
     
      image: '1671132363542Screenshot (16).png',
     
      auther: 'lord budda',
      location: 'india',
      description: 'he is lord budda',
   
    }
  ]

route.use(cors({
    origin: "*",
}))
// parse application/x-www-form-urlencoded
route.use(bodyParser.urlencoded({ extended: false }))
route.use(bodyParser.json())


route.use(express.static("public"));

// to upload a file
const Imagestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

// upload middleware 
const upload = multer({ storage: Imagestorage })

// route.get("/post", (req, res) => {
//     res.json("oooo")
// })
route.get("/post", async (req, res) => {
    try {
    
        const p = await post.find()

        // res.status(200).json({
        //     ms: "created sucesfully",
        //     p: p

        // });
        l=p.reverse()
        console.log(1,l)
        // l.map(element => {
        //     arr.push({
        //         image: '1671117119175Screenshot (15).png',
        //         auther: 'pp',
        //         location: 'aqqqq',
        //         description: 'gougu',
        //     })
        // });
        res.json({
            p:l
        })
    } catch (e) {
        res.json("err bro")
        console.log(e.message)
    }

});


route.post("/add/user",upload.single('image'), async (req, res) => {
    try {
       
        console.log(req.body);
   
       
        const p = await post.create({
            image: req.file.filename,
            auther: req.body.auther,
            location: req.body.location,
            description: req.body.description
        })
       arr.push( {
      
        image:req.file.filename ,
        auther: req.body.auther,
        location: req.body.location,
        description:  req.body.description,
     
      })
        res.status(200).json({
            ms: "created sucesfully",
            

        });
    } catch (e) {
        res.json("err bro")
        console.log(e.message)
    }

});
module.exports = route;

