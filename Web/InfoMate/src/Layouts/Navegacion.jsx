import { Link } from "react-router-dom"


function Navegacion() {

    let logeado = localStorage.getItem('logeado')

    function cerrarSesion(){
        localStorage.removeItem('logeado')
    }

    return (
    logeado ?
    (
        <aside className="bg-[#B62D4F]  px-5 py-10 w-full">
            <Link 
                to={"/"}
            >
                <p className={` nav ${ location.pathname === '/' ? 'text-[#1E142D]': 'text-slate-100'} 'uppercase hover:text-[#1E142D] uppercase pb-5 '`} >
               Inicio 
                </p>
            </Link>
            
            <Link
                to={"/Nuevo"}
            >
                <p className={` nav ${ location.pathname === '/Nuevo' ? 'text-[#1E142D]': 'text-slate-100'} 'uppercase hover:text-[#1E142D] uppercase pb-5 '`} >
               Nuevo 
                </p>
            </Link>
            
            <Link
                to={"/Editar"}
            >
                <p className={` nav ${ location.pathname === '/Editar' ? 'text-[#1E142D]': 'text-slate-100'} 'uppercase hover:text-[#1E142D] uppercase pb-5 '`} >
                    Editar 
                </p>            
            </Link>

            <Link
                to={"/Eliminar"}
            >
                <p className={` nav ${ location.pathname === '/Eliminar' ? 'text-[#1E142D]': 'text-slate-100'} 'uppercase hover:text-[#1E142D] uppercase pb-5 '`} >
                Eliminar 
                </p>
            </Link>
            
            <Link
                onClick={cerrarSesion}
                to={'/Login'}
            >
                <p className={` nav ${ location.pathname === '/CerrarSecion' ? 'text-[#1E142D]': 'text-slate-100'} 'uppercase hover:text-[#1E142D] uppercase '`} >
               Cerrar Sesion 
                </p>
            </Link>
        </aside>
    )
    :
    (
      <div>
        
      </div>
    )
  
  )
}

export default Navegacion