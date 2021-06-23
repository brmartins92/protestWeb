
const express = require("express");
var router = express.Router();

/*Router: /protest */
/*Middle */
const authentication = require('../middleware/auth.js');
/*controller*/

const protestC = require('../controllers/protest');

router.get("/", (req, res ) => {
 
  const result = protestC.allProtest();

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }

});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const result = protestC.findProtest(id);

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }

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
  const id = req.params.id;
  const result = protestC.like(id);

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }
 
});

router.put("/dislike/:id", (req, res) => {
  const id = req.params.id;
  const result = protestC.dislike(id);

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }
 
});


router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = protestC.remove(id);

  if (result.result) {
      res.status(result.status).json(result.result);
  } else {
      res.status(result.status).json(result.message);
  }
 
});

module.exports = router ;

