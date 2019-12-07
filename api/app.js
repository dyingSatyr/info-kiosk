const express = require('express')
const app = express()

const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Backend API is now listening on port ${port}.`)
})

app.get('/', (req, res) => {
	res.send('Hello from API')
})
