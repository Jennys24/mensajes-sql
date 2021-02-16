const express = require("express");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const port = 8000;

app.use(session({secret: 'mipropiaclave'}));  
app.use(flash());

app.use(express.json() );
app.use(express.urlencoded({extended:true})); 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/public', express.static("public"));

app.use(require('./routes/rts'));

app.listen( port, () => console.log(`Listening on port: ${port}`) );