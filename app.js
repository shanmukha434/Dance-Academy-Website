const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))

// PUG SPECIFIC STUIFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views direc

// ENDPOINTS
app.get('/',(req,res)=>{
    // const con="This is best contnt"
    const params={}
    
    res.render('index.pug',params);
   
})


// start the status
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});