/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {memo,useState,useCallback} from "react";

var a = 1;
function App(){
  const [count,setCount] = useState(0);

  /*
    useCallback:
    *used to memoize functions, 
    which helps in optimizing performance by avoiding 
    unnecessary re-renders of components that depend on these functions. 
  */
  // function a(){
  //   console.log("hi there");
  // }
  const a = useCallback(function(){
    console.log("hi there");
  },[])
  return <div>
    <button onClick={()=>setCount(count+1)}>Click me {count}</button>
    <Demo a={a}/>
  </div>
}

const Demo= memo(function({a}){
  console.log('re-render+++');
  return <div>
    hi bro... {a}
  </div>
})

export default App;