package models

import "fmt"

type Caracteristicas struct {
	Id_caracteristicas int64
	Titulo             string
	Texto              string
	Url_imagen_texto   string
	Tipo               string
}

func NewCaracteristicas(id_caracteristicas int64, titulo string, texto string, url_imagen_texto string, tipo string) *Caracteristicas {
	return &Caracteristicas{
		Id_caracteristicas: id_caracteristicas,
		Titulo:             titulo,
		Texto:              texto,
		Url_imagen_texto:   url_imagen_texto,
		Tipo:               tipo,
	}
}

//TOSTRING

func (c *Caracteristicas) ToString() {
	fmt.Printf("id:%d \nTitulo:%s \nTexto:%s \nUrl:%s \nTipo:%s \n", c.Id_caracteristicas, c.Titulo, c.Texto, c.Url_imagen_texto, c.Tipo)
}

//GETTER AND SETTERS

func (c *Caracteristicas) GetIdCaracteristicas() (id_caracteristicas int64) {
	id_caracteristicas = c.Id_caracteristicas
	return
}

func (c *Caracteristicas) SetIdCaracteristicas(id_caracteristicas int64) {
	c.Id_caracteristicas = id_caracteristicas
}

func (c *Caracteristicas) GetTitulo() (titulo string) {
	titulo = c.Titulo
	return
}

func (c *Caracteristicas) SetTitulo(titulo string) {
	c.Titulo = titulo
}

func (c *Caracteristicas) GetTexto() (texto string) {
	texto = c.Texto
	return
}

func (c *Caracteristicas) SetTexto(texto string) {
	c.Texto = texto
}

func (c *Caracteristicas) GetUrlImg() (url string) {
	url = c.Url_imagen_texto
	return
}

func (c *Caracteristicas) SetUrlImg(url string) {
	c.Url_imagen_texto = url
}

func (c *Caracteristicas) GetTipo() (tipo string) {
	tipo = c.Tipo
	return
}

func (c *Caracteristicas) SetTipo(tipo string) {
	c.Tipo = tipo
}
