import { useState } from "react"

function Buscador() {

    const [valorBuscador, setValorBuscador] = useState("Buscar")
    const [iconoSeleccionado, setIconoSeleccionado] = useState("Titulo")

    function cambiarValorBuscador() {
        setValorBuscador("")
    }

    function buscar() {
        console.log("Buscar")
    }

    function cambiarATitulo() {
        setIconoSeleccionado("Titulo")
    }
    function cambiarATexto() {
        setIconoSeleccionado("Texto")
    }
    function cambiarALibro() {
        setIconoSeleccionado("Libro")
    }
    function cambiarAAutor() {
        setIconoSeleccionado("Autor")
    }
    function cambiarATipo() {
        setIconoSeleccionado("Tipo")
    }

    return (
        <div className="md:min-w-screen bg-white m-5 flex">
            <input type="text" id="buscador" name="buscador" placeholder={valorBuscador} className="" />
            <div className="icono-buscar" onClick={buscar}>
                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
            </div>
            <div className="flex flex-row w-full ml-4">
                <div className="basis-1/5 flex">
                    <p className="basis-1/2">
                        Titulo
                    </p>

                    {
                        iconoSeleccionado === "Titulo" ? (
                            <svg class="h-8 w-8 text-purple-800" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                        ) : (

                            <div onClick={cambiarATitulo} className="iconos-buscador">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                            </div>
                        )
                    }

                </div>

                <div className="basis-1/5 flex">
                    <p className="basis-1/2">
                        Texto
                    </p>

                    {
                        iconoSeleccionado === "Texto" ? (
                            <svg class="h-8 w-8 text-purple-800" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                        ) : (
                            <div onClick={cambiarATexto} className="iconos-buscador">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                            </div>
                        )
                    }

                </div>
                <div className="basis-1/5 flex">
                    <p className="basis-1/2">
                        Libro
                    </p>
                    {
                        iconoSeleccionado === "Libro" ? (
                            <svg class="h-8 w-8 text-purple-800" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                        ) : (
                            <div onClick={cambiarALibro} className="iconos-buscador">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                            </div>
                        )
                    }

                </div>
                <div className="basis-1/5 flex">
                    <p className="basis-1/2">
                        Autor
                    </p>

                    {
                        iconoSeleccionado === "Autor" ? (
                            <svg class="h-8 w-8 text-purple-800" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                        ) : (
                            <div onClick={cambiarAAutor} className="iconos-buscador">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                            </div>
                        )
                    }
                </div>
                <div className="basis-1/5 flex">
                    <p className="basis-1/2">
                        Tipo
                    </p>
                    {
                        iconoSeleccionado === "Tipo" ? (
                            <svg class="h-8 w-8 text-purple-800" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                        ) : (
                            <div onClick={cambiarATipo} className="iconos-buscador">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z" /></svg>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Buscador