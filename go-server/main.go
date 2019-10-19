package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/golang", HelloServer)
	fmt.Println("starting golang server at 8003")
	http.ListenAndServe(":8003", nil)
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Congratulations! The Go HTTP Server is working")
}
