const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
      "charset=utf-8"
    );
    res.set({ "content-type": "application/json; charset=utf-8" });
    next();
  });
/* routers*/

const routerProtest = require('./src/routers/protestR');


app.use('/protest' , routerProtest);

  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});