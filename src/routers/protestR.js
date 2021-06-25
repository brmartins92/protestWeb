
const express = require("express");
var router = express.Router();

/*Router: /protest */
/*Middle */
const authentication = require('../middleware/auth.js');
/*controller*/

const protestC = require('../controllers/protest');

router.get("/", (req, res ) => {
 
  const result = protestC.all();

  if (result.result) {
      res.status(result.status).json(result);
  } else {
      res.status(result.status).json(result);
  }

});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const result = protestC.find(id);

  if (result.result) {
      res.status(result.status).json(result);
  } else {
      res.status(result.status).json(result);
  }

});

router.post("/" ,authentication.auth,  (req, res ) => {
  let { user, message } = req.body;
  const result = protestC.create(user , message );

  if (result.result) {
      res.status(result.status).json(result);
  } else {
      res.status(result.status).json(result);
  }

});

router.put("/like/:id", (req, res) => {
  const id = req.params.id;
  const result = protestC.like(id);

  if (result.result) {
      res.status(result.status).json(result);
  } else {
      res.status(result.status).json(result);
  }
 
});

router.put("/dislike/:id", (req, res) => {
  const id = req.params.id;
  const result = protestC.dislike(id);

  if (result.result) {
      res.status(result.status).json(result);
  } else {
      res.status(result.status).json(result);
  }
 
});


router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = protestC.remove(id);

  if (result.result) {
      res.status(result.status).json(result);
  } else {
      res.status(result.status).json(result);
  }
 
});

module.exports = router ;

