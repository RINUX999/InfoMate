import axios  from "axios"
import Buscador from "../Layouts/Buscador"
import Navegacion from "../Layouts/Navegacion"
import { useEffect, useState } from "react"


//Importaciones Nuevas

function Index() {

  //cliente,_ = fetch("http://localhost:8080/api/infoMate/") // ⬅️ 1) llamada a la API, el resultado es una Promise
  //.then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
  //.then((dog) => console.log(dog)); // ⬅️ 3) aquí ya tenemos la respuesta en formato objeto


  //console.log(cliente)

  const [post, setPost] = useState(null);


  async function Conectar(){
    try {
      const response = await axios.get('http://localhost:9898/api/infoMate/');
      console.log(response);
    } catch (error) {
      console.log("ERROR BRYAN ")
      console.error(error);
    } 
  }

  let logeado = localStorage.getItem('logeado')

  console.log("Index")

  return (
    logeado ?
    (<div className="flex flex-nowrap">
      <div className="md:flex md:min-h-screen md:min-w-screen  w-1/5">
        <Navegacion/>
      </div>
      <div className="flex-none h-14 w-13 bg-[#1E142D] md:min-h-screen md:min-w-screen grow">
        <Buscador/>
        <h1 className="text-white uppercase" onClick={Conectar} >
          Inicio
        </h1>
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