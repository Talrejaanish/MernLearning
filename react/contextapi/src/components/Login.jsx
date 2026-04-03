import React,{useState,useContext} from 'react'
import UserContext from '../../context/UserContext'


function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {setUser}=useContext(UserContext);
const handleSubmit=(e)=>
{
e.preventDefault()
setUser({username,password})
}
  return (
    <div>
      <h3 className='text-3xl '>Login Page</h3>
      <input type="text" placeholder='Enter Username' value={username} onChange={(e)=> setUsername(e.target.value)}></input>
      <br />
      
      <input type="password" placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
      <br />
      <br />
      <button  onClick={handleSubmit}>Submit</button>
      <br />
      <br />
    </div>
  )
}

export default Login
