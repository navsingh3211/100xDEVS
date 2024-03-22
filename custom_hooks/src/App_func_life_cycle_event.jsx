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


function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.error("component mounted");

    return () => {

      // when component get released from DOM
      console.log("component unmounted");
    };
  }, []);

  return <div>
    From inside my component
  </div>
}

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

export default App
