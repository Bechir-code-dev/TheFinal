var jwt =require('jsonwebtoken');
const {User} = require('../models/Schema');

const auth = async(req,res,next) =>{
  const token = req.headers["autorisation"];
  if(!token){
    res.send('session is not connected')
  }else{
    const verified = await jwt.verify(token , process.env.JWT_SECRET)
    const user = await User.findById(verified.id)
    if(user){
        req.user=user;
        next();
    }
  }
}
module.exports={auth}