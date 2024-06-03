const app = require('./app')

console.log("update value is :",app);

let arr= [2,3,4,5,6,7,8]

let result = arr.filter((item)=>{
        return item>=4
})
console.log(result);