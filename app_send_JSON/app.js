var express = require('express');
var fs = require('fs');
const path = require('path');
var app = express();
app.use(express.static("public"))


var fileName = path.join(__dirname, "/data/students.json"); // per llegir la ruta sempre correcte

app.get('/data', (req,res) => {
	fs.readFile(fileName, "utf-8", (err, data) => {
		let object;
		if(err) return res.sendStatus(500);
		try{ 
			object = JSON.parse(data);
		}

		catch(error){
			res.sendStatus(500);
		}
		
		res.json(object);
	})
    
})





app.listen(3000)