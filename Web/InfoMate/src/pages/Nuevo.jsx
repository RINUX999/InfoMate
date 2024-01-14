import { useState } from "react"
import Navegacion from "../Layouts/Navegacion"

//Importaciones extras
import axios  from "axios"


//Recursos para subir la imagen
import {uploadFileImg,uploadFilePDF} from '../firebase/config'

//MIS IMPORTACIONES
import {crearJSON, enviarData} from '../axios/Axios'

function Nuevo() {
  const [titulo, setTitulo] = useState("")
  const [texto, setTexto] = useState("")
  const [fileImg,setFileImg] = useState("")
  const [tipo, setTipo] = useState("")
  const [libro, setLibro] = useState("")
  const [autor, setAutor] = useState("")
  const [pagina, setPagina] = useState(0)
  const [filePdf,setFilePdf] = useState("")
  const [codigoLatex, setCodigoLatex] = useState("")

  let logeado = localStorage.getItem('logeado')
  let idElementoNI = parseInt(localStorage.getItem('longitud'))+1
  let idElementoN = "00000000"
  if(idElementoNI <10 ){
    idElementoN = "0000000" + idElementoNI.toString()
  }else if(idElementoNI <100){
    idElementoN = "000000" + idElementoNI.toString()
  }else if(idElementoNI <1000){
    idElementoN = "00000" + idElementoNI.toString()
  }else if(idElementoNI <10000){
    idElementoN = "0000" + idElementoNI.toString()
  }else if(idElementoNI <100000){
    idElementoN = "000" + idElementoNI.toString()
  }else if(idElementoNI <1000000){
    idElementoN = "00" + idElementoNI.toString()
  }else if(idElementoNI <10000000){
    idElementoN = "0" + idElementoNI.toString()
  }else if(idElementoNI <100000000){
    idElementoN = idElementoNI.toString()
  }

  const json = JSON.stringify(
    {
      id: idElementoNI,
      caracteristicas: {
          id_caracteristicas: idElementoNI,
          titulo: titulo,
          texto: texto,
          url_imagen_texto:"",
          tipo: tipo
      },
      origen: {
          id_origen: idElementoNI,
          libro: libro,
          autor: autor,
          pagina: pagina
      },
      ver: {
          id_ver: idElementoNI,
          url_pdf:"",
          codigo_latex: codigoLatex
      }
    }
  )

  function actualizarInputs(){
    setTitulo(document.querySelector("#titulo").value.toString())
    setTexto(document.querySelector("#texto").value.toString())
    setTipo(document.querySelector("#tipo").value.toString())
    setLibro(document.querySelector("#libro").value.toString())
    setAutor(document.querySelector("#autor").value.toString())
    setPagina(parseInt(document.querySelector("#pagina").value.toString()))
    setCodigoLatex(document.querySelector("#codigo-latex").value.toString())
  }




  const handleSubmit =async (e) =>{
    e.preventDefault();
    try{

      const resultImg = await uploadFileImg(fileImg,idElementoN) // /Subir imagen a firebase
      const resultPdf = await uploadFilePDF(filePdf,idElementoN)
      const json1 = await  crearJSON(idElementoNI,titulo,texto,resultImg,tipo,libro,autor,pagina,
      resultPdf,codigoLatex)
      await enviarData(json1)

    const config = {
        url: 'http:////localhost:9898/api/infoMate/',
        method: 'POST',
        body: json,
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
    };
    const response = await axios(config);


      /*
      const response  = await fetch('http:////localhost:9898/api/infoMate/',
      { method: 'POST',
        body: json,
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
     })
  */   
      //Enviar todos los datos
/*
      console.log("DATA ENVIADA:")
      console.log(titulo)
      console.log(texto)
      console.log(tipo)
      console.log(libro)
      console.log(autor)
      console.log(pagina)
      console.log(codigoLatex)
      console.log("URL-IMG:",resultImg)
      console.log("URL-IMG:",resultPdf)
  */
    }catch(error){
      console.log("ERROR AL ENVIAR DATOS:",error)
    }
  }

  function saludo(){
    console.log("Hola")
  }

    return (
    logeado ?
    (<div className="flex flex-nowrap">
      <div className="md:flex md:min-h-screen md:min-w-screen  w-1/5">
        <Navegacion/>
      </div>
      <div className="mostrarInfo flex-none h-14 w-13 bg-[#1E142D] md:min-h-screen md:min-w-screen grow">
        <div className="bg-white mt-10 mr-10 ml-10 md:min-h-screen flex flex-col">
          <p className="text-center uppercase text-4xl">
            Creando Nuevo Elemento 
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset className='flex flex-col p-5 text-center m-auto text-center'>
              <label for="" className='m-1 font-bold text-lg text-4xl font-serif' >Id</label>
              <input className="m-auto text-center text-4xl font-serif" type="text" id="name" name="name" value={idElementoN}/>
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Titulo</label>
              <input className="m-auto text-center bg-[#1E142D] text-white text-3xl font-serif"  type="titulo" id="titulo" name="titulo" placeholder='Titulo'
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Texto</label>
              <textarea shape="rect" className="m-auto text-center min-w-full h-56 text-3xl bg-[#1E142D] text-white font-serif"  type="text" id="texto" name="texto" placeholder='Texto'
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Imagen</label>
              <input 
              className="m-auto text-center bg-[#1E142D] text-white text-3xl font-serif" 
              type="file" id="imagen" 
              name="Imagen"
              onChange={e=> setFileImg(e.target.files[0]) }
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Tipo</label>
              <input className="m-auto text-center bg-[#1E142D] text-white text-3xl font-serif"  type="text" id="tipo" name="tipo" placeholder='Tipo'
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Libro</label>
              <input className="m-auto text-center bg-[#1E142D] text-white text-3xl font-serif"  type="text" id="libro" name="libro" placeholder='Libro'
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Autor</label>
              <input className="m-auto text-center bg-[#1E142D] text-white text-3xl font-serif"  type="text" id="autor" name="autor" placeholder='Autor'
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Pagina</label>
              <input className="m-auto text-center bg-[#1E142D] text-white text-3xl font-serif"  type="number" id="pagina" name="pagina" placeholder='Pagina'
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Pdf</label>
              <input 
              className="m-auto text-center bg-[#1E142D] text-white text-3xl font-serif" 
              type="file" id="pdf" 
              name="Pdf"
              onChange={e=>setFilePdf(e.target.files[0])}
              />
              <label for="" className='m-1 font-bold text-lg text-5xl font-serif' >Codigo Latex</label>
              <textarea shape="rect" className="m-auto text-center min-w-full h-56 text-3xl bg-[#1E142D] text-white font-serif"  type="text" id="codigo-latex" name="texto" placeholder='Codigo Latex'
              />
              <div>
              <button className="m-auto text-center mt-3 text-lg bg-[#1E142D] text-white uppercase p-2 
              rounded-xl border-4 border-inherit
              " 
              onMouseMove={actualizarInputs}
              >
                  Subir
                </button>
              </div>
               
            </fieldset>
          </form>
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

export default Nuevo