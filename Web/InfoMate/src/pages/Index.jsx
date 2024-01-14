import Buscador from "../Layouts/Buscador"
import Navegacion from "../Layouts/Navegacion"
import MostrarInfoIndex from "../Layouts/MostrarInfoIndex"

import { useState } from "react"
import Prueba from "../Layouts/Prueba"

//Importaciones Nuevas


function Index() {

//  localStorage.setItem('buscar',"")

  let logeado = localStorage.getItem('logeado')

  console.log("Index")

  const [data,setData] = useState([])

  return (
    logeado ?
    (<div className="flex flex-nowrap " >
      <div className="md:flex md:min-h-screen md:min-w-screen  w-1/5 ">
        <Navegacion/>
      </div>
      <div className="flex-none h-14 w-13 bg-[#1E142D] md:min-h-screen md:min-w-screen grow">
        <Buscador 
          setData={setData}
        />
        <div className="mostrarInfo" >
        {
          data.map((d)=>(
            <MostrarInfoIndex
              d={d}
            />
          )) 
        }
        </div>
      </div>
    </div>
    )
    :
    (
      <h1>
        Error
      </h1>
    )
  )
}

export default Index