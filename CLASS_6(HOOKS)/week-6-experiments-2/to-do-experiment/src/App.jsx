/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function App(){
    const [todos,setTodos] = useState([]);
   
    useEffect(()=>{
        setInterval(()=>{ 
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async(data)=>{
            let result = await  data.json();
            setTodos(result.todos);
            })
        },4000);
    },[]);
    return <div>
        <h1 style={{color:"yellow"}}>Todos Listing:</h1>
        {
            todos.map(
                (todo)=> <ShowCard 
                            key={todo.id} 
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                        />
            )
        }
    </div>
}

function ShowCard(props){
    return <div>
        <p>{props.id}</p>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

export default App;