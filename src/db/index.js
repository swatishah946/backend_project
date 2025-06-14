import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbconnect=async()=>{
    try{
        const db=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 console.log(`\n MOngoDb connected ! DB Host : ${
    db.connection.host
 }`)
    }
    catch(error){
console.log(`DB connection failed ${error}`);
process.exit(1)
    }
}

export default dbconnect;