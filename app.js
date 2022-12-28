const express=require('express');
const app=express()
const mongoose=require('mongoose');
const cityRoute=require('./routes/city')
const userRoute=require('./routes/user')
const thirdRoute=require('./routes/third')


app.use(express.json())
app.use(cityRoute)
app.use(userRoute)
app.use(thirdRoute)
app.get('/',(req,res)=>{
    res.send('hello world')
})

mongoose.connect("mongodb://localhost:27017/erience",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('db connected')
})
app.listen(3000,()=>{
    console.log('app is running')
})