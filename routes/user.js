
const usercontroller=require('../controllers/user')
const express=require('express')
const router=express.Router();
router.post('/user',usercontroller.postUser)
router.get('/users',usercontroller.getusers)

router.patch('/user/:id',usercontroller.updateuser)

module.exports=router