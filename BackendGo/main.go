package main

import (
	"fmt"

	"github.com/RINUX999/InfoMate/db"
	"github.com/RINUX999/InfoMate/models"
)

func main() {
	/*
		db.Connect()
		defer db.Close()
		if db.ExisteTabla("InfoMatef") {
			fmt.Println("La tabla existe")
		} else {
			fmt.Println("La tabla no existe")
		}
	*/
	/*CARACTERISTICAS
	caracteristicas := models.NewCaracteristicas(1, "Teorema Fundamental para las integrales dobles", "Si integral f(x) dx existe y ... ", "../Imagenes", "Teorema")

	caracteristicas.ToString()
	fmt.Printf("UNO: \n%d \n%s \n%s \n%s \n%s\n", caracteristicas.GetIdCaracteristicas(), caracteristicas.GetTitulo(), caracteristicas.GetTexto(), caracteristicas.GetUrlImg(), caracteristicas.GetTipo())

	caracteristicas.SetIdCaracteristicas(2)
	caracteristicas.SetTitulo("Otro")
	caracteristicas.SetTexto("HSHDHDHDHF FJDHDH")
	caracteristicas.SetUrlImg("../DDKKDK")
	caracteristicas.SetTipo("Lemma")

	fmt.Printf("DOS: \n%d \n%s \n%s \n%s \n%s", caracteristicas.GetIdCaracteristicas(), caracteristicas.GetTitulo(), caracteristicas.GetTexto(), caracteristicas.GetUrlImg(), caracteristicas.GetTipo())
	*/
	/*
		ver := models.NewVer(1, "kfkfkfkf", "fdfjfjdjfjf")
		ver.ToString()
	*/
	//models.Ver()

	db.Connect()
	db.Ping()
	defer db.Close()
	/*
		var id int64
		id = 2
		caracteristicas := dao.NewCaracteristicas(id, "Teorema de Role", "Existe un punto", "../Imagenes", "teorema")
		origen := dao.NewOrigen(id, "Calculus", "Spivack", 39)
		ver := dao.NewVer(id, "../Pdfs", "kfdomiroedpocmeimceoimdimcer")
		infoMate := models.CreateInfoMate(id, *caracteristicas, *origen, *ver)
		infoMate.Insert()
	*/
	/*
		listaInfoMates := models.ListInfoMates()
		for index, value := range listaInfoMates {
			fmt.Printf("%d: %v \n", index, value)
		}*/
	var id int64
	id = 2
	fmt.Println(models.GetInfoMate(id))
}
