package models

import "fmt"

type Ver struct {
	Id_ver       int64
	Url_pdf      string
	Codigo_latex string
}

func NewVer(id_ver int64, url_pdf string, codigo_latex string) *Ver {
	return &Ver{
		Id_ver:       id_ver,
		Url_pdf:      url_pdf,
		Codigo_latex: codigo_latex,
	}
}

//TOSTRING

func (v *Ver) ToString() {
	fmt.Printf("id:%d \nUrl:%s \nCodigo:%s\n ", v.Id_ver, v.Url_pdf, v.Codigo_latex)
}

//GETTERS AND SETTERS

func (v *Ver) GetIdVer() (id_ver int64) {
	id_ver = v.Id_ver
	return
}

func (v *Ver) SetIdVer(id_ver int64) {
	v.Id_ver = id_ver
}

func (v *Ver) GetUrlPdf() (url_pdf string) {
	url_pdf = v.Url_pdf
	return
}

func (v *Ver) SetUrlPdf(url_pdf string) {
	v.Url_pdf = url_pdf
}

func (v *Ver) GetCodigoLatex() (codigo_latex string) {
	codigo_latex = v.Codigo_latex
	return
}

func (v *Ver) SetCodigoLatex(codigo_latex string) {
	v.Codigo_latex = codigo_latex
}
