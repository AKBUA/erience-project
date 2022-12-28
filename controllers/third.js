const axios=require('axios')

exports.thirdparty=async(req,res)=>{
 

     let call={
        "method":"GET",
        "url":"https://api.binance.com/api/v1/time"
     }
     const result=await axios(call);
     console.log(result)
}