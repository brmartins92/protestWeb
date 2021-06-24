const express = require("express");
const app = express();
const cors = require('cors');
const routers = require('./routers/index.js');
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routers);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});