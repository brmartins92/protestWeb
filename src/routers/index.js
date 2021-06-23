const express = require("express");
var router = express.Router();

const routerProtest = require('./protestR');


router.use('/protest' , routerProtest);


module.exports = router ;