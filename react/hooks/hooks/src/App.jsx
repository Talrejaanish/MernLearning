import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count=0;
  let [count,setCounter] = useState(10);
  const addValue = () => {
    setCounter(count + 1);
  }
   const subValue = () => {
    setCounter(count - 1);
  }
  
  return (
    <>
      <h1>Hello Hooks in React</h1>
      <p>counter {count}</p>
      {/* <p>counter {count}</p>
      <p>counter {count}</p>
      <p>counter {count}</p>
      <p>counter {count}</p> */}
      <button onClick={() => addValue()}>Add</button> 
      <button onClick={() => subValue()}>Subtract   </button>
    </>
  )
}

export default App
