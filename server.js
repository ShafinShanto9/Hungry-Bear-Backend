const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('hellow from node js'))
app.listen(port,()=>console.log(`Node js Server Running At ${port}`))