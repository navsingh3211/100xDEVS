/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";


/* Any time a parent re-render ,its child re-render as well   */
function App() {
  const [todos,setTodos] = useState([
    {
      title:"Go to gym",
      description:"We should go to gym 7-9",
      completed:false
    },
    {
      title:"Study DAS",
      description:"We should Study DAS 9-11",
      completed:true
    }
  ]);
  function addTodo(){
    console.log('add to do func');
    setTodos([...todos,{
      title:"New title",
      description:"New title will be done after some time"
    }])
  }
  console.log('inside app');
  return (
    // console.log();
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {
        todos.map((data)=>{
          return <TODO title={data.title} description={data.description}/>
        })
      }
    </div>
  )
}

function TODO(props){
  console.log('inside to do func');
  return <div> 
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    {/* <button></button> */}
  </div>
}



export default App
