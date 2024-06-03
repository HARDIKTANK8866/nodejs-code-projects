module.exports={
  x:10,
  y:21,
z:function () {
  return 10
  }
}

// console.log("HEllo buddy nodejs");
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



