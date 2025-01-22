import mongoose from "mongoose";

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connnect")
})
.catch(()=>{
    console.log('notconnect')
})