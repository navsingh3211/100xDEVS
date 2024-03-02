import express from 'express';
import dovenv from 'dotenv';
import routes from './routes/auth.js';

const app = express();
dovenv.config();
app.use(express.json());
// console.log(routes());
app.use('/api',routes());

const PORT = process.env.PORT
app.listen(PORT,()=>{
  console.log(`Our app is listening on port ${PORT}`);
})