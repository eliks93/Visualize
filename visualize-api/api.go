package main

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var db *gorm.DB

func init() {
	//open a db connection
	var err error
	db, err = gorm.Open("postgres", "host=myhost port=myport user=gorm dbname=gorm password=mypassword")
	if err != nil {
		panic("failed to connect database")
	}
	//Migrate the schema
	db.AutoMigrate(&tracksModel{})
}

func main() {
	router := gin.Default()
	v1 := router.Group("/api/v1/tracks")
	{
		v1.POST("/", createTopTracks)
		v1.GET("/", fetchTracks)
		v1.DELETE("/", deleteTracks)
	}
	router.Run()
}
