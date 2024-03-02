import jwt from 'jsonwebtoken';

export const signin = (req,res)=>{
  try{
    const secretKey= process.env.JWT_SECRET_KEY;
    let {username,password} = req.body;
    // console.log(secretKey);
    const token = jwt.sign({username},secretKey,{expiresIn:'1h'});

    return res.status(200).json({
      message:'our token',
      token
    })

  }catch(error){
    console.log(error);
  }
}