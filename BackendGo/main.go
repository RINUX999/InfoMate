package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/RINUX999/InfoMate/handlers"
	"github.com/gorilla/mux"
)

func main() {
	//Rutas
	mux := mux.NewRouter()
	//EndPoind
	mux.HandleFunc("/api/infoMate/", handlers.GetInfoMates).Methods("GET")
	mux.HandleFunc("/api/infoMate/{id:[0-9]+}", handlers.GetInfoMate).Methods("GET")
	mux.HandleFunc("/api/infoMate/", handlers.CreateInfoMate).Methods("POST")
	mux.HandleFunc("/api/infoMate/{id:[0-9]+}", handlers.UpdateInfoMate).Methods("PUT")
	mux.HandleFunc("/api/infoMate/{id:[0-9]+}", handlers.DeleteInfoMate).Methods("DELETE")
	fmt.Println("Servidor ejecutandose en 8080")
	log.Fatal(http.ListenAndServe(":8080", mux))

}
