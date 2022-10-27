const express = require('express')  
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9000
let server;

//middleware

app.use(cors())
app.use(bodyParser.urlencoded({extended: true, limit: '20mb'}))
app.use(bodyParser.json({limit: '20mb' }))


mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    }).then(() => console.log('DB is connected'))
    .catch(err => console.log('Error connecting to DB: ', err))

server = app.listen(PORT, () => {
    console.log(`Node server running on port: ${PORT}` );
})