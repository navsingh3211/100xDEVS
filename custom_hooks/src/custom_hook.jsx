/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n){
  const [todos, setTodos] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {

    //call the api after a specific interval ,again and again
    const intervalId = setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
    },n*1000);

    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return ()=>{
      clearInterval(intervalId);
    }
  }, [n]);
  return [todos,loading];
}

function App() {
  const [todos,loading] = useTodos(6);

  if(loading){
    return <div>
      Loading...
    </div>
  }
  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App