
const express = require("express");
var router = express.Router();

/*Router: /protest */
/*Middle */
const authentication = require('../middleware/auth.js');
/*controller*/

const protestC = require('../controllers/protest');

router.get("/", (req, res ) => {
 
  const result = protestC.allProtest(req , res );

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }

});

router.get("/:id", (req, res) => {
  const result = protestC.findProtest(req , res );

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }

  res.json(find);
});

router.post("/" ,authentication.auth,  (req, res ) => {
  let { user, message } = req.body;
  const result = protestC.create(user , message );

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }

});

router.put("/like/:id", (req, res) => {

  const result = protestC.like(req , res );

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }
 
});

router.put("/dislike/:id", (req, res) => {

  const result = protestC.dislike(req , res );

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }
 
});


router.delete("/:id", (req, res) => {

  const result = protestC.dislike(req , res );

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }
 
});

module.exports = router ;

