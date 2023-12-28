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

// Obtener todos los registros
func ListInfoMates() InfoMates {
	cont := 0
	infoMates := InfoMates{}

	//Obteniendo los valores de caracteristicas
	sql := "SELECT id_caracteristicas,titulo,texto,url_imagen_texto,tipo FROM Caracteristicas"
	rows, _ := db.Query(sql)
	for rows.Next() {
		infoMate := InfoMate{}
		rows.Scan(&infoMate.Caracteristicas.Id_caracteristicas, &infoMate.Caracteristicas.Titulo, &infoMate.Caracteristicas.Texto, &infoMate.Caracteristicas.Url_imagen_texto, &infoMate.Caracteristicas.Tipo)
		infoMates = append(infoMates, infoMate)
	}

	//Obteniendo los valores de origen
	sql = "SELECT id_origen,libro,autor,pagina FROM Origen"
	rows, _ = db.Query(sql)

	for rows.Next() {
		infoMate := infoMates[cont]
		rows.Scan(&infoMate.Origen.Id_origen, &infoMate.Origen.Libro, &infoMate.Origen.Autor, &infoMate.Origen.Pagina)
		infoMates[cont] = infoMate
		cont += 1
	}
	cont = 0

	//Obteniendo los valores de ver
	sql = "SELECT id_ver,url_pdf,codigo_latex FROM Ver"
	rows, _ = db.Query(sql)

	for rows.Next() {
		infoMate := infoMates[cont]
		rows.Scan(&infoMate.Ver.Id_ver, &infoMate.Ver.Url_pdf, &infoMate.Ver.Codigo_latex)
		infoMates[cont] = infoMate
		cont += 1
	}
	cont = 0

	//Obteniendo el id de InfoMate
	sql = "SELECT id FROM InfoMate"
	rows, _ = db.Query(sql)

	for rows.Next() {
		infoMate := infoMates[cont]
		rows.Scan(&infoMate.Id)
		infoMates[cont] = infoMate
		cont += 1
	}
	return infoMates
}

// Obtener un registro
func GetInfoMate(id int64) *InfoMate {
	caracteristicas := dao.NewCaracteristicas(0, "", "", "", "")
	origen := dao.NewOrigen(0, "", "", 0)
	ver := dao.NewVer(0, "", "")
	infoMate := NewInfoMate(0, *caracteristicas, *origen, *ver)
	//Obteniendo Caracteristicas
	sql := "SELECT id_caracteristicas,titulo,texto,url_imagen_texto,tipo FROM Caracteristicas WHERE id_caracteristicas=?"
	rows, _ := db.Query(sql, id)

	for rows.Next() {
		rows.Scan(&infoMate.Caracteristicas.Id_caracteristicas, &infoMate.Caracteristicas.Titulo, &infoMate.Caracteristicas.Texto, &infoMate.Caracteristicas.Url_imagen_texto, &infoMate.Caracteristicas.Tipo)
	}

	//Obteniendo los valores de origen
	sql = "SELECT id_origen,libro,autor,pagina FROM Origen WHERE id_origen=?"
	rows, _ = db.Query(sql, id)

	for rows.Next() {
		rows.Scan(&infoMate.Origen.Id_origen, &infoMate.Origen.Libro, &infoMate.Origen.Autor, &infoMate.Origen.Pagina)
	}

	//Obteniendo los valores de ver
	sql = "SELECT id_ver,url_pdf,codigo_latex FROM Ver WHERE id_ver=?"
	rows, _ = db.Query(sql, id)

	for rows.Next() {
		rows.Scan(&infoMate.Ver.Id_ver, &infoMate.Ver.Url_pdf, &infoMate.Ver.Codigo_latex)
	}

	//Obteniendo el id de InfoMate
	sql = "SELECT id FROM InfoMate WHERE id=?"
	rows, _ = db.Query(sql, id)

	for rows.Next() {
		rows.Scan(&infoMate.Id)
	}

	return infoMate
}

// Actualizar un registro
func (infoMate *InfoMate) Update() {

	//Actualizando Caracteristicas
	sql := "UPDATE Caracteristicas SET id_caracteristicas=? ,titulo=?,texto=?,url_imagen_texto=?,tipo=? WHERE id_caracteristicas=?"
	db.Exec(sql, infoMate.Caracteristicas.Id_caracteristicas, infoMate.Caracteristicas.Titulo, infoMate.Caracteristicas.Texto, infoMate.Caracteristicas.Url_imagen_texto, infoMate.Caracteristicas.Tipo, infoMate.Id)

	//Actualizando Origen
	sql = "UPDATE Origen SET id_origen=?,libro=?,autor=?,pagina=?  WHERE id_origen=?"
	db.Exec(sql, infoMate.Origen.Id_origen, infoMate.Origen.Libro, infoMate.Origen.Autor, infoMate.Origen.Pagina, infoMate.Id)

	//Actualizando Ver
	sql = "UPDATE Ver SET  id_ver=?,url_pdf=?,codigo_latex=? WHERE id_ver=?"
	db.Exec(sql, infoMate.Ver.Id_ver, infoMate.Ver.Url_pdf, infoMate.Ver.Codigo_latex, infoMate.Id)
}

// ELiminar registro
func (infoMate *InfoMate) Delete() {
	sql := "DELETE FROM InfoMate WHERE id=?"
	db.Exec(sql, infoMate.Id)
	sql = "DELETE FROM Caracteristicas WHERE id_caracteristicas=?"
	db.Exec(sql, infoMate.Id)
	sql = "DELETE FROM Origen WHERE id_origen=?"
	db.Exec(sql, infoMate.Id)
	sql = "DELETE FROM Ver WHERE id_ver=?"
	db.Exec(sql, infoMate.Id)
}
