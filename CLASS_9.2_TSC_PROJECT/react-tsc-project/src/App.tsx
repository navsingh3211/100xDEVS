import './App.css'

function App() {

  return (
    <>
      <Todos todo={{title:"Ram dham",description:"dwdfef",age:12}} />
    </>
  )
}

interface TodoInterface{
  title:string,
  description?:string,
  age:number
}

interface todoInput{
  todo:TodoInterface
}
function isLegal(age:number):boolean{
  return age>18;
}
function Todos({todo}:todoInput){
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    {todo.age !== undefined && <h3>Age is legal or not : {isLegal(todo.age)}</h3>}
  </div>
}

export default App
