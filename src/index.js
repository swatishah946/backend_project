import dotenv from 'dotenv'
dotenv.config({
    path: './.env',
})

 import dbconnect  from './db/index.js'
 dbconnect()
 .then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port ${process.env.PORT} `)
    })
    app.on("error",(err)=>{
console.log("Error",err);
throw err
    })
 })
 .catch(err=>{
    console.log("DB connection failed",err)
 })