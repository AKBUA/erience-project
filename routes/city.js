const citycontroller=require('../controllers//city')
const express=require('express')
const router=express.Router();
router.post('/city',citycontroller.postcity)
router.get('/cities',citycontroller.getCity)
module.exports=router