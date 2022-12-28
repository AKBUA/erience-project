const citySchema=require('../models/city')
const userSchema=require('../models/user')

exports.postUser=(req,res)=>{
    const{name,city,mediaUrl,mobile}=req.body;
    const user=new userSchema({
        name:name,
        city:city,
        mobile:mobile,
        mediaUrl:mediaUrl
    })
    user.save().then((data)=>{
        res.status(200).send({user:data})
    }).catch((e)=>{
        console.log(e)
        res.send(e)
    })

}
exports.getusers=(req,res)=>{
userSchema.find({}).then((result)=>{
    res.status(200).send({usersList:result})
}).catch((error)=>{
    res.status(300).send(error)
})
}


exports.updateuser=async(req,res)=>{
    const id=req.params.id
    const {name,city,mobile,mediaUrl}=req.body

     await userSchema.findByIdAndUpdate({_id:id},{
        name:name,
        city:city,
        mobile:mobile,
        mediaUrl:mediaUrl

     },{new:true})
     .then((result)=>{
        res.status(200).send({user:result})
    }).catch((error)=>{
        res.status(300).send(error)
    })
}