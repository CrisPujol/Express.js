const express = require('express')
const bodyparser = require('body-parser')
const moment = require('moment')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require("mongodb").ObjectID;
const app = express()
const PORT = 3000;


const url = "mongodb://localhost:27017/test"


app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded( { extended: false } ) )


MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("connect to DB...")
}




app.get('/', (req,res) => {
	const title = "TODO Tasks"
	const pending = tasks.filter( task => task.done === false );
	res.render('index', { title, pending } )
})

app.get('/completed', (req,res) => {
	const title = "COMPLETED Tasks"
	const completed = tasks.filter( task => task.done === true );
	res.render('completed', { title, completed } )
})

app.get('/tasks', (req,res) => {
	res.json(tasks)
})

// curl --request POST 'http://localhost:3000/task' --data 'desc=My new task'
app.post('/task', (req,res) => {
	var newTask = req.body;
	newTask.done = false;
	newTask.time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
	newTask.id = counter++;
	tasks.push(newTask);
	res.redirect('/');
})

// curl --request DELETE 'http://localhost:3000/task/2'
app.delete('/task/:id', (req,res) => {
	const id = +req.params.id;
	tasks = tasks.filter( task => task.id != id );
	console.log(tasks)
	res.sendStatus(200)
})


// curl -X PUT http://localhost:3000/task/2 --data done=true
app.put('/task/:id', (req,res) => {
	const id = +req.params.id;

	const isDone = (req.body.done === "true") ? true : false;
	console.log (isDone)
	console.log (id)

	tasks = tasks.map( task => {
		if ( task.id === id ) {
			task.done = isDone;
			task.timeCompleted = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
		}
		return task;
	});

	res.sendStatus(200)
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )