
const auth = (req, res, next) => {
  const { user } = req.body;
  
  if ( !user ) {
    res.status(400).json({ message: "Está requisição precisa conter o usuário" });
  }
 
   return next();
  
};

const auth2 = (req, res, next) => {
  console.log("BRUNOOOOOOOOOO");
  return next();
  
};

module.exports = { auth , auth2 };