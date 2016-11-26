const express = require('express')
const app = express()
const PORT = 3000;

let tasks = [
	{
		desc: 'Flight tickets to Canada',
		done: false
	},
	{
		desc: 'Buy gold',
		done: false
	}
]

app.set('view engine', 'pug')
app.use( express.static('public') )

app.get('/', (req,res) => {
	const title = "TODO Tasks"
	res.render('index', { title, tasks } )
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )