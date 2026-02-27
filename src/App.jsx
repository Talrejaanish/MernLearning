import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
function App() {
  
  const[length,setLength]=useState(10)
  const[isNumberAllowed,setIsNumberAllowed]=useState(false)
  const[isCharAllowed,setIsCharAllowed]=useState(false)
  const[Password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
   let password=''
   let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   if(isNumberAllowed){ 
    str+='0123456789'
   }
   if(isCharAllowed){
    str+='!@#$%^&*()_+'
   }
   for(let i=0;i<length;i++){
    password+=str.charAt(Math.floor(Math.random()*str.length))
     }  
     setPassword(password)
  },[length,isNumberAllowed,isCharAllowed])
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-xl my-8 text-orange-700 p-4 bg-grey-100'> 
    <div className='flex rounded-xl shawow-md overflow-hidden  mb-4'>
      <input type ='text' value={Password} readOnly placeholder="Generated Password" className='w-full p-2 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500'/>
      <button onClick={passwordGenerator} className='bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'>Generate</button>
    </div>
    <div className='flex items-center mb-4'>
      <label className='flex items-center'>
        <input type='checkbox' checked={isNumberAllowed} onChange={(e)=>setIsNumberAllowed(e.target.checked)} className='mr-2'/>
        Include Numbers
      </label>  
      <label className='flex items-center ml-4'>
        <input type='checkbox' checked={isCharAllowed} onChange={(e)=>setIsCharAllowed(e.target.checked)} className='mr-2'/>
        Include Special Characters
      </label>
    </div>
    <div className='flex items-center mb-4'>
      <label className='mr-2'>Password Length:</label>
      <input type='number' value={length} onChange={(e)=>setLength(e.target.value)} min='1' max='20' className='w-16 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500'/>      
    
    </div>
   </div>
   </>
  )
}

export default App
