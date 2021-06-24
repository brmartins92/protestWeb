const express = require("express");
const router = express.Router();

const routerProtest = require('./protestR');

router.use('/protest' , routerProtest);

module.exports = router ;