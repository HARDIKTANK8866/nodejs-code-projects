// module.exports={
//   x:10,
//   y:21,
// z:function () {
//   return 10
//   }
// }



console.log("HEllo buddy nodejs");                     //code module
// const fs =require('fs')
// fs.writeFileSync('hello.txt','hello how are you')

let name = 'Hardik';
let age = 29;
let hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));

const add = (a,b)=>{
    return a+b
}
console.log(add(1,2));

//object

const person={
    name:'Hardik',
    age: 29,
    greet(){
        console.log('Hello my name is'+ this.name);
    }
}
person.greet()


//CREATE NEW SERVER

// const http = require('http')

// http.createServer((req,res)=>{
//   res.write("<h1>Hello Node JS</h1>")
//   res.end()
// }).listen(4500)

//OTHER METHOD

// const http = require('http')

// function dataControl(req,res) {
//   res.write("<h1>Hello How are You ?</h1>")
//   res.end()
// }

// http.createServer(dataControl).listen(4500)

//WITH ARROW FUNCTION
// const http = require('http')

// http.createServer((req,res)=>{
//   res.write("<h1>Hello How are You ?</h1>")
//   res.end()
// }).listen(4500)


const colors =require('colors')
console.log("Hello".red);
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
 
