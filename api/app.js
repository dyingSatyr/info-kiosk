const express = require('express')

const app = express()

app.listen(5000, () => {
	console.log('Backend API is now listening.')
})

app.get('/', (req, res) => {
	res.send('Hello from API')
})
