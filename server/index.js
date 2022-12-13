const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const port = 3001;
const datafile = require("./data/data.json");
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
const routes = require('./routes/routes.js')(app,fs);

const server = app.listen(port, ()=>console.log(`Server start on port ${server.address().port}`));

  
// app.get('/posts', (req, res)=>{
//     res.send({data: datafile.posts});
// })