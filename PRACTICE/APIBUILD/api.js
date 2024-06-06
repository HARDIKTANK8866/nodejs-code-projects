const express = require("express");
const dbConnect = require("./apimongodb");
const { name } = require("ejs");
const app = express();
const monogDb = require('monodb');
const monodb = require("monodb");

app.use(express.json())

//GET

app.get("/",async (req, res) => {
    let data =await dbConnect()
    data= await data.find().toArray()
    console.log(data);
    res.send(data);    // data will be upload MONGODB IN PRODUCT FILE
});

//POST 

app.post('/',async(req,res)=>{
    let data =await dbConnect()
    let result =await data.insert(req.body)  //DATA FROM RCV MONGO
    // res.send({name:'hd'})
    res.send(result)
})
app.listen(5000);

//PUT

app.put('/:name',async(req,res)=>{            //POSTMAN TO NODEJS DATA
    let data =await dbConnect()
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body})
    res.send({result:"updated"})
})

//DELETE

app.delete('/',async(req,res)=>{
    console.log(req.params.id);
    const data =await dbConnect()
    const result =await data.deleteOne({_id: new monodb.ObjectId(req.params.id)})
    console.log(result);
    res.send("done")
})