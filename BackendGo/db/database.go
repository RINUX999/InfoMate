package db

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

const url = "rifardo:RIfardo999@tcp(localhost:3306)/InfoMateDB"

//const url = "root:-AB4ec1h2E1E4FhbAEaaH-FdgGgFCAa2@tcp(roundhouse.proxy.rlwy.net:43596)/railway"

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

// Verificar la conexion
func Ping() {
	if err := db.Ping(); err != nil {
		panic(err)
	}
}

// Verificar si una tabla existe o no
func ExisteTabla(tableName string) bool {
	sql := fmt.Sprintf("SHOW TABLES LIKE '%s'", tableName)
	rows, err := db.Query(sql)
	if err != nil {
		fmt.Println("Error: ", err)
	}
	return rows.Next()
}

// Polimorfismo a Exec
func Exec(query string, args ...interface{}) (sql.Result, error) {
	result, err := db.Exec(query, args...)
	if err != nil {
		fmt.Println(err)
	}
	return result, err
}

// Polimorfismo a Query
func Query(query string, args ...interface{}) (*sql.Rows, error) {
	rows, err := db.Query(query, args...)
	if err != nil {
		fmt.Println(err)
	}
	return rows, err
}
