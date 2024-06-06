const { name } = require('ejs');
const dbConnect = require('./mongodb')

const updateData=async()=>{
    let data =await dbConnect()
    let result =await data.updateOne(    //UPDATEone CAN ONE RECODE UPDATE AND ONLY UPDATE CAN ALL RECODE UPDATE
        {name:'max 5'},{
            $set:{ name: 'max pro 5'}
        }
    )
    console.warn(result);
}
updateData()