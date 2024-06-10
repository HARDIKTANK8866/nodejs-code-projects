const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())


const db = require('./db.config')

//create table if not exit
db.sequelize.sync();
const controller = require('./mypgdb.controller')
app.get('/',function(req,res){
    res.send("Hello wold")
})

//create new customer
app.post('/customers/new',function(req,res){
    controller.createCustomer(req,res)
})

//fetch all customers
app.get('/customers',function(req,res){
     controller.findAllCustomer(req,res)
    })

//retrive a single customer by id

app.get('/customers/:email',function(req,res){
    controller.findCustomerByEmail(req,res)
})

//update customers

app.put('/customers/update',function(req,res){
    controller.updateCustomer(req,res)
})

//delete customers

app.delete('/customers/delete/:email',function(req,res){
    controller.deleteCustomer(req,res)
})

app.listen(5000,()=>{
    console.log("server is ruuning on port 3000 ");
})