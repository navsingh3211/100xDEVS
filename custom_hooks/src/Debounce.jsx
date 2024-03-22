/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'

function useDebounce(inputValue,n){
  const [inputText,setInputText] = useState('');
  useEffect(()=>{
    
    let setTimeId = setTimeout(()=>{
      setInputText(inputValue);
    },n*1000);
    return ()=> clearTimeout(setTimeId);
    
  },[inputValue,n]);
  return inputText;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 5); // 500 milliseconds debounce delay
  console.log(debouncedValue,'debouncedValue');
  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default App