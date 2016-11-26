const express = require("express");
const PORT = process.argv[2];
var app = express();

app.get("/about", (request, response) =>{
	console.log("request recived")
	response.send("hello world!")
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})