
export function crearJSON(id,titulo,texto,resultImg,tipo,libro,autor,pagina,resultPdf,codigoLatex){
    const json = JSON.stringify(
        {
          id: id,
          caracteristicas: {
              id_caracteristicas: id,
              titulo: titulo,
              texto: texto,
              url_imagen_texto:resultImg,
              tipo: tipo
          },
          origen: {
              id_origen: id,
              libro: libro,
              autor: autor,
              pagina: pagina
          },
          ver: {
              id_ver: id,
              url_pdf: resultPdf,
              codigo_latex: codigoLatex
          }
        }
    )
    return json
} 

export async function enviarData(json){
	await console.log(json)
    await fetch('http:////localhost:9898/api/infoMate/',
      { method: 'POST',
        body: json,
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
    })
}
