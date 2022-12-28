const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    
    },
    city:{
        type:String,
        required:true
    },
    mobile:{
        type:Number

    },
    mediaUrl:{
        type:String,
        unique:true
    }
})
module.exports=mongoose.model('user',userSchema)