const JWT = require('jsonwebtoken')
const createError = require('http-errors')


module.exports = {
    signaAccessToken: (userId)=>{ 
        return new Promise((resolve,reject)=>{
            const payLoad = {
                name: "yours truly"
            }
            const secret = "some super secret"
            const options = {}
            
            JWT.sign(payLoad,secret,options,(err,token)=>{
                if(err) reject(err)
                    resolve(token)
            })
        })
    }
}