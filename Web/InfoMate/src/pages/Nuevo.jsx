import Navegacion from "../Layouts/Navegacion"


function Nuevo() {

    let logeado = localStorage.getItem('logeado')

    return (
    logeado ?
    (<div className="flex flex-nowrap">
      <div className="md:flex md:min-h-screen md:min-w-screen  w-1/5">
        <Navegacion/>
      </div>
      <div className="flex-none h-14 w-13 bg-[#1E142D] md:min-h-screen md:min-w-screen grow">
        <h1 className="text-white uppercase">
          Nuevo
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

export default Nuevo