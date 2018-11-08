// declaring express and installing
const express = require('express')
const app = express()

// process.env.PORT >> remote port and 3000 >> local
const port = process.env.PORT || 3000

// first route
app.get('/', (req, res) => {
    res.send('this will be great platform')
})

app.listen(port, () => {
    console.log('App listening on port 3000!')
})