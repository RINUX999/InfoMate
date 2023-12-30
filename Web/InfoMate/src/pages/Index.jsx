import { useState } from "react"
import Login from "./Login"
import { Link } from "react-router-dom"


function Index() {

  const [logeado,setLogeado] = useState(localStorage.getItem('logeado'))

  function cerrarSecion(){
    localStorage.removeItem('logeado')
  }

  return (
    logeado ?
    (<div>
      <h1 onClick={cerrarSecion}>
        <Link 
          to={"/Login"}
        >
          Cerrar secion
        </Link>
      </h1>
    </div>)
    :
    (
      <h1>
        Error
      </h1>
    )
  )
}

export default Index