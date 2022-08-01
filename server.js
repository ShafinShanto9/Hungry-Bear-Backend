const express = require('express')
const dbConnect = require('./dbConnect')
const itemsRoute = require('./routes/itemsRoute') 
const userRoute = require('./routes/userRoute') 
require("dotenv").config();


const app = express()
app.use(express.json())
const port = 5000


app.use('/api/items/', itemsRoute)
app.use('/api/user/', userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})