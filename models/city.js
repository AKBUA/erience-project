const mongoose=require('mongoose')
const Schema=mongoose.Schema
const citySchema=new Schema({
    city:{
        type:String,
        unique:true
    
    }
})
module.exports=mongoose.model('city',citySchema)