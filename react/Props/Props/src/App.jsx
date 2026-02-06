import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componests/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"Anish",
    age:22,
    city:"Bangalore"
  }
  let username="Anish";
  return (
    <>
    
     <Card username={username} ></Card>
    <Card username="User2"></Card>
    
     
    </>
  )
}

export default App
