const { name } = require('ejs');
const dbConnect = require('./mongodb')


const deleteData= async()=>{
    let data =await dbConnect()
    let result =await data.deleteMany({brand:'MOTO'}) //DELETEONE CAN ON RECODE DELETE DELETEMANY ALL
    console.warn(result);
    if (result.acknowledged) {
        console.log("Recode deleted");
    }
}
deleteData()
