import jwt from 'jsonwebtoken';

const all_users = [
  {
    username:"navneet",
    password:"nks123"
  },
  {
    username:"ramji",
    password:"ramji123"
  },
  {
    username:"sitaji",
    password:"sitaji123"
  },
]
function useExists(username,password){
  const found = all_users.find((data)=> data.username === username && data.password === password )
  return found;
}

export const signin = (req,res)=>{
  try{
    const secretKey= process.env.JWT_SECRET_KEY;
    let {username,password} = req.body;

    if(!useExists(username,password)){
      return res.status(401).json({
        message:'user not found!'
      })
    }
    // console.log(useExists(username,password),'does exit');
    
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

export const verifyUser = (req,res)=>{
  try{
    const token = req.headers.authorization;
    // console.log(token);
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
    return res.status(200).json({
      message:'our decoded data',
      decoded
    })

  }catch(error){
    return res.status(401).json({
      msg:"Some error has been occured!",
      error
    })
  }
}