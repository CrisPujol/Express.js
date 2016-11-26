const express = require("express");
const PORT = process.argv[2];
let app = express();
const ENV = process.env.ENV // es posa davant de node app.js a la consola (set ENV=production)

		app.get('/about', (request, response)=>{
		  if(ENV == "developer"){
		    console.log("request recieved!")
		    response.send("Hello there developer! You are in about")
		  }else{
		    console.log("request recieved!")
		    response.send("Hello there production! You are in about")
		  }
		})

		app.get('/home', (request, response)=>{
		  if(ENV == "developer"){
		    console.log("request recieved!")
		    response.send("Hello there developer! You are in home")
		  }else{
		    console.log("request recieved!")
		    response.send("Hello there production! You are in home")
		  }
		})

		app.get('/contact', (request, response)=>{
		  if(ENV == "developer"){
		    console.log("request recieved!")
		    response.send("Hello there developer! You are in contact")
		  }else{
		    console.log("request recieved!")
		    response.send("Hello there production! You are in contact")
		  }
		})

		app.listen(PORT,()=>{
		  console.log(`Listening on port ${PORT}...`)
		})