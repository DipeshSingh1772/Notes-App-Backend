const mongoose = require("mongoose")

const notesSchema = new  mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        uppercase:true
    },
    content:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    date:{
        type:String,
        required:true
    }

})

const Notes = mongoose.model('notes', notesSchema)
module.exports = Notes