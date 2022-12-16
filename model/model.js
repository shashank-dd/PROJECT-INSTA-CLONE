const { string, date } = require('joi');
const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const postschema = new mongooose.Schema({
    image :{type:String,required:true},
    auther:{type:String,required:true},
    location:{type:String,required:true},
 description:{type:String,required:true},


})

const post = mongooose.model('uses', postschema);

module.exports = post;
