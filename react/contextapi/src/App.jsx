import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from '../context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
      {/* <h4 className='text-3xl '>React Context API</h4> */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
} 

export default App
