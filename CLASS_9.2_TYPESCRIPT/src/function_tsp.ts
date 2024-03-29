function doSomething(cb1:()=>void,cb2:(str:string,num:number)=>string):string{
  cb1();
  const res = cb2("Ram is good boy",2);
  return "1";
}