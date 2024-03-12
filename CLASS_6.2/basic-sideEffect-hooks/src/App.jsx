/* eslint-disable react/prop-types */
import { useEffect ,useState} from "react";
import axios from "axios";

function App() {
  const [id,setId] = useState(1);
  return (
    <div>
      <button 
        id="btn1" 
        value={1}
        onClick={(e)=>setId(e.target.value)}
      >1
      </button>

      <button 
        id="btn2" 
        value={2}
        onClick={(e)=>{
          // console.log(e.target.value,'rajyu')
          setId(e.target.value)
        }}
      >2
      </button>

      <button 
        id="btn3" 
        value={3}
        onClick={(e)=>setId(e.target.value)}
      >3
      </button>

      <button 
        id="btn4" 
        value={4}
        onClick={(e)=>setId(e.target.value)}
      >4
      </button>
      
      <ToDo id={id}/>
    </div>
  );
}

function ToDo({id}){
  const [todo,setTodo] = useState({});
  // console.log(id,'id++++++++++++++==');
  useEffect(()=>{
    setTimeout(()=>{
      let fetchData = async()=>{
        const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        setTodo(response.data.todo)
        // console.log(response.data.todo,'response++')
      }
      fetchData();
    },2000)
    
  },[id]);

  return (
    <div>
      <h1 style={{color:"yellow"}}>Todos Details by id:</h1>
      <ShowCard 
        key={todo.id} 
        id={id}
        title={todo.title}
        description = {todo.description}
      />
      
    </div>
  )
}

function ShowCard(props){
  return <div>
      {
        props ? 
            <div style={{color:'darkviolet'}}>
              <h1>#{props.id}</h1>
              <h2>{props.title}</h2>
              <h3>{props.description}</h3>
            </div> : <p>No data found</p>
      }
      
  </div>
}

export default App
