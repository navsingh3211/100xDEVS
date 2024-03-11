/* eslint-disable react/prop-types */

import React ,{useState}from 'react'
import './App.css'

function App() {
  const [title,setTitle] = useState('Ayodhaya');
  function updateTitleHandler(){
    setTitle(Math.random);
  }
  return (
    <div>
      <button onClick={updateTitleHandler}>Click me to change the title</button>

      <NameCom name={`The Title is : ${title}`}/>
      <NameCom name={'Navneet2'}/>
      <NameCom name={'Navneet3'}/>
      <NameCom name={'Navneet4'}/>
      <NameCom name={'Navneet5'}/>
    </div>
  )
}

// function NameCom(props){
//   return (<div>
//     <h4>{props.name}</h4>
//   </div>)
// }

const NameCom = React.memo(
  function NameCom(props){
    return (<div>
      <h4>{props.name}</h4>
    </div>)
  }
);



export default App
