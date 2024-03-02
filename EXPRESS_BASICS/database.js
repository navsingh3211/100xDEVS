import mongoose from 'mongoose';

const mongoUrl= "mongodb://localhost:27017/harKiratSingh";


const connection = async ()=>{
  const conn= await mongoose.connect(mongoUrl);

  console.log(`MongoDb connect at :${conn.connection.host}`);
}


export default connection;