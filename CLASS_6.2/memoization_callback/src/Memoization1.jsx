
import { useEffect ,useState,useMemo } from "react";

//useMemo
function App() {
  let [num,setNum] = useState(0);
  let [counter,setCounter] = useState(1);
  // let [initialValue,setInitialValue] = useState(0);

  /* Memoization save one extra re-render over the useEffect */
  const totalSum = useMemo(()=>{ 
    console.log('memo func re-render');
    let sum=0 
    for(let i=1;i<=num;i++){
      sum = sum +i    
    }
    return sum;
  },[num])

  // useEffect(()=>{
  //   console.log('useEffect re-render');
  //   let sum=0
  //   for(let i=1;i<=num;i++){
  //     sum = sum +i    
  //   }
  //   setInitialValue(sum);
  // },[num]); 
  //the code inside useEffect func will run only 
  //when value inside dependancy array get changed
  
  return (
    <div>
      <div>
        <input onChange={(e)=>setNum(e.target.value) } type="number" /> <br/>
        <p>Sum of 1 to {num} is:  {totalSum}</p>
        <button onClick={()=> setCounter(counter+1)}>Couter ({counter})</button>
      </div>
    </div>
  )
}

export default App
