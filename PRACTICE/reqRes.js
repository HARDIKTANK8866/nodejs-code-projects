const express = require('express')
const app = express()

app.get("",(req,res)=>{
    console.log("Data send by browser =>>",req.query.name);
    res.send("Welcome,This is a Home page")
})

app.get("",(req,res)=>{
    res.send("Welcome,This is a About page")
})

app.get("",(req,res)=>{
    res.send("Welcome,This is a Help page")
})

app.listen(5000)