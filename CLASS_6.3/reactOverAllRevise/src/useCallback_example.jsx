/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useMemo, useState ,memo,useCallback} from 'react'
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

  //useCallback is not about minimizing the amount of code that is run
  //useCallback is about ,not re-rendering a child components,
  // if the function hasn't/doesnt need to change across renders

  const calCulateCryptoReturn = useCallback(function(){
    return exchangeData1.returns + exchangeData2.returns;
  },[exchangeData1,exchangeData2]);

  const inComeTax = (bankData.income + calCulateCryptoReturn()) * 0.3;

  return (
    <div>
      <Child calCulateCryptoReturn={calCulateCryptoReturn}/>
      <Dummy />
    </div>
  )
}

const Dummy = memo(
  function(){
    console.log('dummy');
    return <div>
      hi
    </div>
  }
);


const Child = memo(
  function Child({calCulateCryptoReturn}){
    console.log('crypto child re-render');
    return <div>
      Your crypoto return are {calCulateCryptoReturn()}
    </div>
  }
);

export default App
