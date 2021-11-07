const PORT = 8000
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const locationRoutes = require('./routes/locations_routes')
const app = express()

// CORS OPTIONS 
const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

// MIDDLEWARE
app.use(express.json())
app.use(cors(options))
app.use('/loc', locationRoutes)


// CONNECT TO DATABASE
mongoose.connect(
    "mongodb+srv://test_user:test_password@cluster0.vwzh7.mongodb.net/LapsLocation?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
const db = mongoose.connection
db.on('error', (error)=>{console.log(error)})
db.once('open', ()=>{console.log('Connected to Database')})

// ROUTES
app.get('/', (req, res)=>{
    res.send('works just fine...')
})

// ADDING THE EVENT LISTENER
app.listen(PORT, ()=>{
    console.log('Server Started')    
})