const dbConnect = require("./mongodb");

//FIRST METHOD TO READ DATA
dbConnect().then((res) => {
  res.find().toArray().then((data)=>{
    console.warn(data);
  })
});

//SECOND METHOD TO READ DATA
// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.warn(data);
// };
// main();

