package main

import "github.com/RINUX999/InfoMate/db"

func main() {
	db.Connect()
	db.Close()
}
