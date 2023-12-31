import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//importaciones React
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


//Comonentes 
import Login from './pages/Login'
import Index from './pages/Index'
import Nuevo from './pages/Nuevo'
import Editar from './pages/Editar'
import Eliminar from './pages/Eliminar'
import VisualisadorPDF from './pages/VisualisadorPDF'

//Layouts


const router = createBrowserRouter([
  {
    path:"/Login",
    element:<Login/>
  },{
    path:"/",
    element:<Index/>
  },
  {
    path:"/Nuevo",
    element:<Nuevo/>
  },
  {
    path:"/Editar",
    element: <Editar/>
  },
  {
    path:"/Eliminar",
    element: <Eliminar/>
  },
  {
    path:"/Visualisador",
    element:<VisualisadorPDF/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)