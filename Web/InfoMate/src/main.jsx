import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//importaciones React
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


//Comonentes 
import Login from './pages/Login'
import Index from './pages/Index'

//Layouts


const router = createBrowserRouter([
  {
    path:"/Login",
    element:<Login/>
  },{
    path:"/",
    element:<Index/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)