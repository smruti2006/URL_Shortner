import mongoose from "mongoose"

const shortnerSchema=new mongoose.Schema({
    LURL:{
        type:String,
        required:true
    },
    SURL:{
        type:String,
        required:true,
        unique:true
    }
})
const URLShortner=mongoose.model("URLShortner",shortnerSchema)
export default URLShortner;