const express= require('express');
const router=express.Router();
const ctrlData=require('../controllers/data.controller');
router.post('/send',ctrlData.sendData);
module.exports=router;