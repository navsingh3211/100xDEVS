/* eslint-disable no-unused-vars */

import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [exchangeData1,setExchange1Data] = useState({});
  const [exchangeData2,setExchange2Data] = useState({});
  const [bankData,setbankData] = useState({});
  console.log("re-rednering++");

  useEffect(()=>{
    setTimeout(()=>{
      setExchange1Data({returns:100});
    });
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      setExchange2Data({returns:100});
    });
  },[]);


  useEffect(()=>{
    setTimeout(()=>{
      setbankData({income:100});
    },2000);
  },[]);

  let totalCryptoReturn = useMemo(()=>{
    console.log("after use Memo");
    return exchangeData1.returns + exchangeData2.returns
  },[exchangeData1,exchangeData2])

  const inComeTax = (bankData.income + totalCryptoReturn) * 0.3;

  return (
    <div>
      Hi there my income tax return {inComeTax}
    </div>
  )
}

export default App
