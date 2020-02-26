package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	v1 := router.Group("/api/v1/tracks")
	{
		v1.POST("/", createTopTracks)
		v1.GET("/", fetchTracks)
		v1.DELETE("/:id", deleteTracks)
	}
	router.Run()
}
