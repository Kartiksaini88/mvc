
let User = require("../model/userModel");

let jwt = require('jsonwebtoken')



let generatetoken = (user)=>{
    return jwt.sign({user},"C3 coding")  
}

let register = async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message : "Email already exists" })
        }

        user = await User.create(req.body)

        let token = generatetoken(user);

        res.status(200).send({user,token})
    }
    catch(err){
        res.status(400).send({message : err.message})
    }

} 

let login = async(req,res)=>{ 
    try{
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(500).send("Wrong Email and password")
        }

        let pass = await User.findOne({pwd:req.body.pwd})

        if(!pass){
            return res.status(500).send("Wrong Email and password")
        }

        let token = generatetoken(user);

        res.status(200).send({user,token})

    }

    catch(err){
        res.status(400).send({message : err.message})
    }

}
module.exports = {register,login}