const express = require('express')
const dbConnect = require('./dbConnect')
const itemsRoute = require('./routes/itemsRoute') 
const userRoute = require('./routes/userRoute')
const billsRoute = require('./routes/billsRoute') 
require("dotenv").config();
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors());

const port = process.env.PORT || 5000


app.use('/api/items/', itemsRoute)
app.use('/api/user/', userRoute)
app.use('/api/bills',billsRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})