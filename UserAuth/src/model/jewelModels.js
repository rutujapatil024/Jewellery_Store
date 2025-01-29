import mongoose from "mongoose";

const jewelSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String},
    category:{type:String,required:true},
    subcategory:{type:String,required:true},
    gender:{type:String,required:true},
    size:{type:String,required:true}
})

const jewelModel = mongoose.models.jewellery || mongoose.model('jewellery',jewelSchema)

export default jewelModel;