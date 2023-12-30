import { useState } from "react";
import { Link } from "react-router-dom";

function EnviarLogin({name,password}) {
    
    console.log("En enviar",name,password)
    //console.log(name,password)
    const [error, setError] = useState(false);
    const [activo, setActivo] = useState(false)

    const Name ="bryan" //Solo es una prueba 
    const Password = "ricardo"

    function ErrorLogin2() {
        return (
            <div className="static">
              <div className="absolute bottom-0 left-0 w-full h-full bg-pink-600 text-center p-10 rounded-3xl">
                <h2 className="font-bold text-2xl text-neutral-50 pb-10">
                  Error
                </h2>
                <p className="font-bold text-1xl text-neutral-50">
                  Datos ingresados incorrectos
                </p>
                  <p className="bg-white m-10 cerrar" onClick={desactivar}>
                    Cerrar
                  </p>
              </div>
            </div>
          )
    };

    function LoginCorrecto() {
      
      //Guardando el logeo
      localStorage.setItem('logeado',true)

      return (
          <div className="static">
            <div className="absolute bottom-0 left-0 w-full h-full bg-green-800 text-center p-10 rounded-3xl">
              <h2 className="font-bold text-2xl text-neutral-50 pb-10">
                Correcto
              </h2>
              <p className="font-bold text-1xl text-neutral-50">
                Datos Ingresados correctamente
              </p>
              <Link
                to={"/"}
                ingreso={"Si"}
              >
                <p className="bg-white m-10 cerrar" onClick={desactivar}>
                  Cerrar
                </p>
              </Link>
            </div>
          </div>
        )
  };
  
    function comprobarDatos(){
      if(name ===Name && password === Password ){
        console.log("Datos correctos")
      }else{
        setError(true)
      }
      activar()
      //handleClick()
    }

    function activar(){
        setActivo(true)
    }

    function desactivar(){
        setActivo(false)
        setError(false)
    }
  
    return (
      <div className='boton-enviar bg-white m-5 rounded-lg'>                     
        <p className='font-bold text-lg enviar' onClick={comprobarDatos} >
          Enviar
        </p>
        {
          error ? 
          (
            <ErrorLogin2/>
          ):
          activo ? (
            <LoginCorrecto/>
          ): (
            <div>
                
            </div>
          )
        }
      </div>
    )

}

export default EnviarLogin