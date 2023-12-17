const express=require('express');
const User=require('../DB/user');
const route=express.Router();

route.post('/',async(req,res)=>{
    const {name, email, phone, gender, password, confirmpassword,age,address}=req.body;
    if (name==="" || email==="" ||age===""  || phone==="" || gender==""|| password==="" || confirmpassword===""  || address==="") {
       return res.status(422).json({error:"Please fill all the fields"}); 
    }

    const userLogin= await User.findOne({email:email});

    if(userLogin){
        return res.status(422).json({error:"Email already registered"});
    }

    else if(password!=confirmpassword){
        return res.status(422).json({error:"Password doesn't match"});
    }

    else{
        const user=User(req.body);
        user.save().then((result)=>{
            var userObj={
                _id: result._id.toString(),
                name: result.name,
                phone: result.email,
            }
            res.status(201).json(userObj);
        }).catch((err)=>res.status(500).json({error:"Failed to register, Try again"}));
    }
    })


module.exports=route;
