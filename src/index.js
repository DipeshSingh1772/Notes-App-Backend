const express = require('express')
require('./Database/NotesDb')
const NotesRouter = require('./Router/NotesRouter')
const app = express()

app.use(express.json());

const port = process.env.port || 3001

app.use(NotesRouter)

app.listen(port, (req,res)=>{
    console.log('server is up ' + port)
})