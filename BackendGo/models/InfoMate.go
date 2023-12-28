package models

import (
	"github.com/RINUX999/InfoMate/db"
	dao "github.com/RINUX999/InfoMate/models/DAO"
)

type InfoMate struct {
	Id              int64
	Caracteristicas dao.Caracteristicas
	Origen          dao.Origen
	Ver             dao.Ver
}

type InfoMates []InfoMate

// Construir InfoMate
func NewInfoMate(id int64, caracteristicas dao.Caracteristicas, origen dao.Origen, ver dao.Ver) *InfoMate {
	infoMate := &InfoMate{
		Id:              id,
		Caracteristicas: caracteristicas,
		Origen:          origen,
		Ver:             ver,
	}
	return infoMate
}

// Crear Usuario e Insertar
func CreateInfoMate(id int64, caracteristicas dao.Caracteristicas, origen dao.Origen, ver dao.Ver) *InfoMate {
	infoMate := NewInfoMate(id, caracteristicas, origen, ver)
	//infoMate.Save()
	return infoMate
}

// Insertar Registro
func (infoMate *InfoMate) Insert() {
	//Insertando Caracteristicas
	sql := "INSERT Caracteristicas SET id_caracteristicas=?, titulo=?, texto=?, url_imagen_texto=?, tipo=? "
	db.Exec(sql, infoMate.Caracteristicas.GetIdCaracteristicas(), infoMate.Caracteristicas.GetTitulo(), infoMate.Caracteristicas.GetTexto(), infoMate.Caracteristicas.GetUrlImg(), infoMate.Caracteristicas.GetTipo())
	//Insertando Origen
	sql = "INSERT Origen SET id_origen=?, libro=?, autor=?, pagina=?"
	db.Exec(sql, infoMate.Origen.GetIdOrigen(), infoMate.Origen.GetLibro(), infoMate.Origen.GetAutor(), infoMate.Origen.GetPagina())
	//Insertando Ver
	sql = "INSERT Ver SET id_ver=?, url_pdf=?, codigo_latex=?"
	db.Exec(sql, infoMate.Ver.GetIdVer(), infoMate.Ver.GetUrlPdf(), infoMate.Ver.GetCodigoLatex())
	//Insertando InfoVer
	sql = "INSERT InfoMate SET id=?, id_caracteristicas=?, id_origen=? , id_ver=? "
	db.Exec(sql, infoMate.Id, infoMate.Caracteristicas.GetIdCaracteristicas(), infoMate.Origen.GetIdOrigen(), infoMate.Ver.GetIdVer())

}
