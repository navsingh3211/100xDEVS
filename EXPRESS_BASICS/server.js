import express from "express";
import connection from "./database.js";
import {Worker} from 'worker_threads'
function giveSUm(a,b){
  return a+b;
}

const app = express();

connection();

app.get("/un-blocking",async(req,res)=>{
  let arr = [1,2,3,4,5];
  let evenArr = arr.filter((data)=> data%2==0)
  res.status(200).send(`even sum is ${evenArr}`);
})

app.get("/blocking",async(req,res)=>{
  const worker = new Worker('./worker.js');
  worker.on("message  ",(data)=>{
    res.status(200).send(`result is ${data}`);
  })
  worker.on("error",(error)=>{
    res.status(404).send(`An error occured ${error}`);
  });
});

app.get("/:a/:b",(req,res)=>{
  const input1 = Number(req.params.a);
  const input2 = Number(req.params.b);
  const result = giveSUm(input1,input2);
  res.status(200).json({
    result
  })
})

const host = 3000;
app.listen(host,()=>{
  console.log(`listening on port ${host}`);
})