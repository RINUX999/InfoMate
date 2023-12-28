package dao

import "fmt"

type Origen struct {
	Id_origen int64  `json:"id_origen"`
	Libro     string `json:"libro"`
	Autor     string `json:"autor"`
	Pagina    int32  `json:"pagina"`
}

func NewOrigen(id_origen int64, libro string, autor string, pagina int32) *Origen {
	return &Origen{
		Id_origen: id_origen,
		Libro:     libro,
		Autor:     autor,
		Pagina:    pagina,
	}
}

// TO STRING
func (o *Origen) ToString() {
	fmt.Printf("id:%d \nLibro:%s \nAutor:%s \nPagina:%d\n", o.Id_origen, o.Libro, o.Autor, o.Pagina)
}

//GETTERS AND SETTERS

func (o *Origen) GetIdOrigen() (id_origen int64) {
	id_origen = o.Id_origen
	return
}

func (o *Origen) SetIdOrigen(id_origen int64) {
	o.Id_origen = id_origen
}

func (o *Origen) GetLibro() (libro string) {
	libro = o.Libro
	return
}

func (o *Origen) SetLibro(libro string) {
	o.Libro = libro
}

func (o *Origen) GetAutor() (autor string) {
	autor = o.Autor
	return
}

func (o *Origen) SetAutor(autor string) {
	o.Autor = autor
}

func (o *Origen) GetPagina() (pagina int32) {
	pagina = o.Pagina
	return
}

func (o *Origen) SetPagina(pagina int32) {
	o.Pagina = pagina
}
