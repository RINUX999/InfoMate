package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/RINUX999/InfoMate/db"
	"github.com/RINUX999/InfoMate/models"
	"github.com/gorilla/mux"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func GetInfoMates(rw http.ResponseWriter, r *http.Request) {

	enableCors(&rw)

	rw.Header().Set("Content-Type", "application/json")

	db.Connect()
	infoMates := models.ListInfoMates()
	db.Close()

	output, _ := json.Marshal(infoMates)
	fmt.Fprintln(rw, string(output))
}

func GetInfoMate(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")

	//Obtener Id
	vars := mux.Vars(r)
	infoMateId, _ := strconv.ParseInt(vars["id"], 10, 64)

	db.Connect()
	infoMate := models.GetInfoMate(infoMateId)
	db.Close()

	output, _ := json.Marshal(infoMate)
	fmt.Fprintln(rw, string(output))
}

func CreateInfoMate(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")

	//Obtener registro
	infoMate := models.InfoMate{}

	decoder := json.NewDecoder(r.Body)

	if err := decoder.Decode(&infoMate); err != nil {
		fmt.Fprintln(rw, http.StatusUnprocessableEntity)
	} else {
		db.Connect()
		infoMate.Insert()
		db.Close()
	}
	output, _ := json.Marshal(infoMate)
	fmt.Fprintln(rw, string(output))
}

func UpdateInfoMate(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")

	//Obtener registro
	infoMate := models.InfoMate{}

	decoder := json.NewDecoder(r.Body)

	if err := decoder.Decode(&infoMate); err != nil {
		fmt.Fprintln(rw, http.StatusUnprocessableEntity)
	} else {
		db.Connect()
		infoMate.Update()
		db.Close()
	}
	output, _ := json.Marshal(infoMate)
	fmt.Fprintln(rw, string(output))
}

func DeleteInfoMate(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")

	//Obtener Id
	vars := mux.Vars(r)
	infoMateId, _ := strconv.ParseInt(vars["id"], 10, 64)

	db.Connect()
	infoMate := models.GetInfoMate(infoMateId)
	infoMate.Delete()
	db.Close()

	output, _ := json.Marshal(infoMate)
	fmt.Fprintln(rw, string(output))
}
