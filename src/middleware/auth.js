
const auth = (req, res, next) => {
  const { user } = req.body;

  if (!user) {
    res.status(401).json({ message: "Está requisição precisa conter o usuário" });
  }

  return next();

};

const auth2 = (req, res, next) => {

  return next();

};

module.exports = { auth, auth2 };