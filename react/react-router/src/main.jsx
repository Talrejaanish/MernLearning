import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from '../components/Home/Home.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Layout from '../hoc/layout.jsx'
const router=createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'/Home',
      element:<Home/>

},
{
      path:'/About',
      element:<About/>

},
{
      path:'/Contact',
      element:<Contact/>

}]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
