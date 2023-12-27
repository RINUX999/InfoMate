package db

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

const url = "rifardo:RIfardo999@tcp(localhost:3306)/InfoMate"

var db *sql.DB

// Realizar la conexion
func Connect() {
	conection, err := sql.Open("mysql", url)
	if err != nil {
		panic(err)
	}
	fmt.Println("Conexion exitosa")
	db = conection
}

// Cerrar la conexion
func Close() {
	db.Close()
}
