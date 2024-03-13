/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {memo,useState,useCallback} from "react";

var a = 1;
function App(){
  const [count,setCount] = useState(0);

  function clickMe(){
    console.log("child clicked");
  }
  return <div>
    <button onClick={()=>setCount(count+1)}>Click me {count}</button>
    <Child a={clickMe}/>
  </div>
}

const Child= memo(function({onClickFunc}){
  console.log('child re-render+++');
  return <div>
    <button onClick={onClickFunc}>Child btn</button>
  </div>
})

export default App;