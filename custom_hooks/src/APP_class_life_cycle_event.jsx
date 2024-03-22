import React, { useState,useEffect } from 'react';
import './App.css'

function App() {
  const [render,setRender] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false);
    },5000)
  },[]);

  return (
    <>
      {render ? <MyComponent/> : <div></div>}
    </>
  )
}


class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log('component mount');
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log('component unmount');
  }

  render() {
    // Render UI
    return <div>Hi there...</div>
  }
}


export default App
