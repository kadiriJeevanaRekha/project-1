const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send("login here")
})
app.get('/register',function(req,res){
    res.send("Register here")
})

app.listen(2020)
