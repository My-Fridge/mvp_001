const express = require("express");
const router = express.Router();

//controller
const tokenService = require("./../../utils/tokenService");
const { createUser, isUser } = require('./userServices')

router.route('/signup')
.post(async (req, res, next)=>{
  const {email, password } = req.body.data;
  try {
    const newUser = await createUser({email, password})
    res.status(201).json({
      data:newUser,
      error:null,
    })
  } catch(e){
    next(e);
  }
})

router.route('/login')
.post(async(req,res,next)=>{
  const {email, password } = req.body.data;
  try{
    const user = await isUser({email, password})
    if(user){
      
      const userToken = await tokenService.issueToken(user);
      res.status(200).json({
        data:{
          userToken,
        }
      })
    }
  }catch(e){
    throw e
  }
})

exports.router = router;