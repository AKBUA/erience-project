const thirdcontroller=require('../controllers/third')
const express=require('express')
const router=express.Router();
router.get('/third',thirdcontroller.thirdparty)
module.exports=router