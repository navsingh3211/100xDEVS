import {lazy,Suspense} from 'react';
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom';
// import { Landing } from "./components/Landing";
// import { Dashboard } from "./components/Dashboard";
const Landing = lazy(()=>import("./components/Landing"));
const Dashboard = lazy(()=>import("./components/Dashboard"));

function App() {
 
  return (
    <div>
      
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <div style={{background:"black" , color:"white"}}>

      <h1>TOp bar is good</h1>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button> 

      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>

      {/* <button onClick={()=>{
        window.location.href = "/"
      }}>Landing</button> 

      <button onClick={()=>{
        window.location.href = "/dashboard"
      }}>Dashboard</button> */}

      </div>
    </div>
}

export default App
