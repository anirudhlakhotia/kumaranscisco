const mongoose=require('mongoose');
const User=mongoose.model('User');

module.exports.sendData = (req,res,next) =>{
    console.log('Inside sendData function');
    var user=new User();
    console.log(req.body.firstname);
    user.firstname=req.body.firstname;
    user.lastname=req.body.lastname;
    user.email=req.body.email;
    user.DOB=req.body.DOB;
    user.phoneno=req.body.phoneno;
    user.save((err,doc)=>{
        if(!err){res.send(doc);}
    });
}