const express = require('express')
const app = express()

//name print
// app.get("",(req,res)=>{
//     console.log("Data send by browser =>>",req.query.name);
//     res.send("Welcome,This is a Home page")
// })

//WITH HTML TAG
app.get("/home",(req,res)=>{
    res.send(`<h1>Welcome,This is a Home page</h1>
    <a href="/about" >Go to About page</a>`)
})

app.get("/about",(req,res)=>{
    res.send(`
    <input type= "text" placeholder="User name" value="${req.query.name}"/> 
    <button>Clicke me</button>`)
})

app.get("/help",(req,res)=>{
    res.send({
        name: 'Hardik',
        email: 'tank@123'
    },
    {
        name: 'Hardik',
        email: 't@123'
    },
    {
        name: 'Har',
        email: 'tnk@123'
    }
)
})

app.listen(5000)