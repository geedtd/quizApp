const express = require('express')  
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9000
let server;

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    }).then(() => console.log('DB is connected'))
    .catch(err => console.log('Error connecting to DB: ', err))

server = app.listen(PORT, () => {
    console.log(`Node server running on port: ${PORT}` );
})