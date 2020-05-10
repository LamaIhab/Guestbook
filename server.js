const express = require('express')
const mongoose = require('mongoose') // for mongodb as database
// connecting to database
const db = require('./config/key_dev').mongoURI
mongoose
   .connect(db,{useNewUrlParser: true})
  
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


    process.on('uncaughtException', function (err) {
      console.log(err);
  }); 
// create the app
const app = express()
const router = require('./api/routes/index')
app.use('/',router)
const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`Server on ${port}` ))