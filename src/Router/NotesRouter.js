const express = require('express')
const Notes = require('../Model/notes')
const router = new express.Router()


router.post('/CreateNotes', async(req,res)=>{

    const new_note = new Notes({
        ...req.body
    })

    try{
        await new_note.save()
        res.status(200).send(new_note);
    }catch(e){
        res.status(400).send("something went wrong" + e)
    }

})

router.get('/AllNotes', async(req, res)=>{

    try{
        const notes = await Notes.find({})
        res.status(200).send(notes)
    }catch(e){
        res.status(400).send(e)
    }
})


router.delete('/DeleteOne', async(req,res)=>{
    try{
        const notes = await Notes.findOneAndDelete({title:req.body.title})
        res.status(200).send("Deleted")
    }catch(e){
        res.status(400).send(e)
    }

})

router.delete('/DeleteAllNotes', async(req,res)=>{
    try{
        const notes = await Notes.deleteMany({})
        res.status(200).send("All Deleted")
    }catch(e){
        res.status(400).send(e)
    }

})

router.patch('/updateNotes', async(req,res)=>{
    try{
        const notes = await Notes.findOneAndUpdate({title:req.body.title}, {content:req.body.content})
        res.status(200).send("Updated")
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router