const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://dipesh:dipesh123@cluster0.nam5d.mongodb.net/NotesApp_Db?retryWrites=true&w=majority",{
    useNewUrlParser:true
})