import express from "express";


function giveSUm(a,b){
  return a+b;
}

const app = express();

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