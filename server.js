const express=require('express')
const app=express()
app.get('/profile/:username',function(req,res){
    res.send(`the profile is of ${req.Params.username}`)
})
app.listen(8087)
