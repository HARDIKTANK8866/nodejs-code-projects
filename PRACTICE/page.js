
const express = require('express')
const path = require('path')
const app = express()

const publicPath = path.join(__dirname,'pages')

// app.use(express.static(publicPath))              //YOU CAN USE DIRECT PAGE WITH EXTENSION

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')                        //USE EJS
app.get('/profile',(_,res)=>{
   const user={
    name:'Hardik',
    age:29,
    email: 'abc@123'
   }
    res.render('profile',{user})
})

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})
app.listen(8000)