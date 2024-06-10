const { model } = require("mongoose");
const db = require("./db.config");
const { where } = require("sequelize");
const Customer = db.customers;

function createCustomer(req, res) {
    if(!req.body.name || !req.body.email || !req.body.age){
        return res.status(400).send({
            message:"Bad data"
        })
    }
    const customerObject = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    }
    Customer.create(customerObject).then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send(error)
    })
}

//get all custyomers
function findAllCustomer(req, res) {
    Customer.findAll().then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send(error)
    })
}

//fetch customer by email
function findCustomerByEmail(req, res) {
    Customer.findByPk(req.params.email).then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send(error)
    })
}


//update data
function updateCustomer(req, res) {
    const newData = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    }
    Customer.update(newData,
        {where:{email:req.body.email}}
    ).then(()=>{
        res.send("updated data successfuly for email:"+req.body.email)
    }).catch(error=>{
        res.status(500).send(error)
    })

}


//delete customer by id
function deleteCustomer(req, res) {
    Customer.destroy({
        where:{
            email:req.body.email
        }
    }).then(()=>{
        req.send("Deleted data successfuly :"+req.params.email)
    }).catch(error=>{
        res.status(500).send(error)
    })
}

module.exports = {
  createCustomer,
  findAllCustomer,
  findCustomerByEmail,
  updateCustomer,
  deleteCustomer,
};
