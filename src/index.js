const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
const port = 3000;

app.use(cors());
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
   
    next();
});
/* routers*/

const routers = require('./routers/index.js');


app.use(routers);

  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});