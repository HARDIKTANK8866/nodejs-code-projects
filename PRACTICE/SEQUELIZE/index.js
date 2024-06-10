import express from 'express'
import { Connection } from './postgSQL.js'

const app= express()

const PORT = 3000


Connection( )
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})