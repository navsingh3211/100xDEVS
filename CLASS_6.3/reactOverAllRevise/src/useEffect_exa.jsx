/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [exchangeData,setExchangeData] = useState({});
  const [bankData,setbankData] = useState({});
  console.log("re-rednering++");

  /*
    when we use seTimeout in our main app,
    when our timer get completed ,our state will get updated
    and a re-render will be happen again setTimeout will be occur.
  */
  //[]--> when dependency array is empty,it means code inside of useEffect will run once.
  
  useEffect(()=>{
    setTimeout(()=>{
      setbankData({income:100});
    },1000);
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      setExchangeData({returns:100});
    },1000);
  },[]); 

  const inComeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
      Hi there my income tax return {inComeTax}
    </div>
  )
}

export default App
