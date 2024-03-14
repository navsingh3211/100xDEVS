/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'

function App() {
  const [exchangeData,setExchangeData] = useState({});
  const [bankData,setbankData] = useState({});

  setTimeout(()=>{
    setbankData({income:100});
  },1000);

  setTimeout(()=>{
    setExchangeData({returns:100});
  },1000);

  const inComeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
      Hi there my income tax return {inComeTax}
      {/* <button onClick={()=>setCount(count+1)}>Click me: {count}</button> */}
    </div>
  )
}

export default App
