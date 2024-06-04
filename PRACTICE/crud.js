const { error, log } = require('console')
const fs= require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crudFiles')
const filePath = `${dirPath}/apple.txt`

fs.writeFileSync(filePath,'This is a simple text file')

                                                            // READ FILE

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

                                                            //   UPDATE FILE

// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log(" file is updated ");
// })

                                                            //RENAME FILE

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if (!err) console.log("file name is updated");
// })

                                                            //DELETE FILE
fs.unlinkSync(`${dirPath}/fruit.txt`)