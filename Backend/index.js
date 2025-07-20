import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import CreateUrl from "./Route/Senturl.js"
import Redirect from "./Route/Redirect.js"
const app=express()
dotenv.config()
const port=process.env.PORT
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
  res.send("Hellow world")
})
//Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Atlas Connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Optional: Exit app if DB fails
  }
};
connectDB();
//Route
app.use('/url',CreateUrl)
app.use('/smruti',Redirect)
app.listen(port,()=>{
    console.log(`App is listening at port number  ${port}`)
})