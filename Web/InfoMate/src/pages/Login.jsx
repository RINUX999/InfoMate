import '../styles/Login.css'
import EnviarLogin from '../Layouts/EnviarLogin';
import { useState } from 'react';


function Login() {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
/*
  function inputName(){
    let valueName = document.querySelector("#name").value.toString()
    setName(valueName)
  }
  function inputPassword(){
    setPassword("kddkdkdkdkdkd")
  }
*/

  function actualizarInputs (){
    setName(document.querySelector("#name").value.toString())
    setPassword(document.querySelector("#password").value.toString())
  }

  return (
    <div>
      <body className=" md:flex md:min-h-screen bg-black body">
          <div className="m-auto">
              <div className='w-96 h-60 backdrop-blur-sm bg-white/30 rounded-lg text-center'>
                  <p className='text-3xl font-bold font-serif text-neutral-50'>
                    Login
                  </p>
                  <form>
                    <fieldset className='flex flex-col p-5'>
                      <label for="" className='m-1 font-bold text-lg' >Name</label>
                        <input type="text" id="name" name="name" defaultValue={name} onMouseOut={actualizarInputs}/>
                        <label for="" className='m-1 font-bold text-lg'>Password</label>
                        <input type="text" id="password" name="password" defaultValue={password} onMouseOut={actualizarInputs}/>
                          <EnviarLogin name={name} password={password}/>
                    </fieldset>
                  </form>
              </div>
          </div>
      </body>
      </div>
  );
}

export default Login