const express = require('express')
const mongoose = require('mongoose') // for mongodb as database
const users = require('./api/routes/users.route') // to use the users routes and functionality
const cors = require('cors')
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
app.use(express.json())
app.use(cors())
app.use('/',users)
const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`Server on ${port}` ))