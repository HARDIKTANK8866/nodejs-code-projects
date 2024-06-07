const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);             //SEND TO MONGODB 
  let result = await data.save();               //SEND TO MONGODB 
    console.log(result);
  //   console.log(req.body);
  res.send(result);
});

app.get("/list",async(req,res)=>{               //GET RUN TO POSTMAN
    let data =await Product.find()
    res.send(data) 
})

app.delete("/delete/:_id",async(req,res)=>{               //DELETE RUN TO POSTMAN
    console.log(req.params);
    let data =await Product.deleteOne(req.params)
    res.send("done") 
})

app.put("/update/:_id",async(req,res)=>{               //DELETE RUN TO POSTMAN
    console.log(req.params);
    let data =await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    res.send("done") 
})

app.listen(5000);
