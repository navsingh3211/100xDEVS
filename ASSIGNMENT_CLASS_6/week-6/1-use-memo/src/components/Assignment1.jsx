/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";

// In this assignment, your task is to create a component 
// that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    // let [fact,setFact] = useState(1);
    let [num,setNum] = useState(0);
    const calculateFact = useMemo(()=>{
        let result = 1
        if (num === 0 || num === 1)
            return result;
        for (var i = num; i >= 1; i--) {
            result *= i;
        }
        return result;
    },[num]);
   
    // let result = 1  
    // for (var i = num; i >= 1; i--) {
    //     result *= i;
    // }
    
    

    return (
        <div>
            {console.log("rrr")}
            <input onChange={(e)=>setNum(e.target.value) } type="number" />
            {/* <button onClick={calculateFact}>Click me</button> */}

            <p>Factorial of {num} is: {calculateFact}</p>
        </div>
    );
}