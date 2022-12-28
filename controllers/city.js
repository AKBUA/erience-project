const citySchema=require('../models/city')

exports.postcity=(req,res)=>{
    const {city}=req.body
    const cities=new citySchema({
        city:city
    })
    cities.save().then((data)=>{
        res.status(200).send({
            city:data
        })
    }).catch((error)=>{
        res.status(300).send(error)
    })
}
exports.getCity=(req,res)=>{
    citySchema.find({}).then((result)=>{
        res.status(200).send({cityList:result})
    }).catch((error)=>{
        res.status(300).send(error)
    })
}