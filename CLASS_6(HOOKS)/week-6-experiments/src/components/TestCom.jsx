/* eslint-disable react/prop-types */

import React ,{useState}from 'react'

// title={'Jai sheree ram'} name={'Ram singh'}
export const TestCom = ()=>{
  // const [name,setName] = useState('Ram singh');
  const [title,setTitle] = useState('Ayodhaya');
  function updateTitleHandler(){
    setTitle(Math.random);
  }
  return (
    <>
    {/* {console.log(props)} */}
      <button onClick={updateTitleHandler}>Click me to change the title</button>
      <h1>The Title is : {title}</h1>
    </>
  )
  
 
}