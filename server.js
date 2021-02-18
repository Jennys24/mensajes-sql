const express = require("express");
const app = express();
const port = 8000;

app.use(express.json() );
app.use(express.urlencoded({extended:true})); 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/public', express.static("public"));

app.use(require('./routes/rts'));

app.listen( port, () => console.log(`Listening on port: ${port}`) );