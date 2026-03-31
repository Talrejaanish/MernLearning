import { useState } from 'react'
import './App.css'

function App() {

let [color,setcolor]=useState("white");
  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap gap-4 rounded-2xl shadow-md justify-center insert-x-0 w-full py-2 bottom-20 insert-x-0 px-2 '>
        <button onClick={() => setcolor("red")}
        className="outlie-null px-4 py-1 gap-4 rounded-full shadow-2 justify-center"id ='btnred'style={{backgroundColor:'red'}}>RED</button>
        <button onClick={() => setcolor("blue")} 
        className="outlie-null px-4 py-1 gap-4 rounded-full shadow-2 justify-center" id='btnblue'style={{backgroundColor:'blue'}}>BLUE</button>
        <button onClick={() => setcolor("green")} 
        className="outlie-null px-4 py-1 gap-4 rounded-full shadow-2 justify-center"id='btngreen'style={{backgroundColor:'green'}}>GREEN</button>
        <button onClick={() => setcolor("yellow")} 
        className="outlie-null px-4 py-1 gap-4 rounded-full shadow-2 justify-center" id='btnyellow'style={{backgroundColor:'yellow'}}>YELLOW</button>
        <button 
        onClick={() => setcolor("grey")}
        className="outlie-null px-4 py-1 gap-4 rounded-full shadow-2 justify-center" id='btngrey'style={{backgroundColor:'grey'}} >GREY</button>
      </div>
      </div>
    
  )
}

export default App
