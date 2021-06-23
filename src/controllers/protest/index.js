const { v4: uuidv4 } = require("uuid");
let  datasProtests = [];

const create = (user ,message) => {
  let datasProtest = {
    id: uuidv4(),
    user: req.body.user,
    message: req.body.message,
    like: 0,
    dislike: 0,
  };

  if (datasProtests.push(datasProtest)) {

    return {status:200 , result: datasProtests , message: "success"};

  } else {
   
    res.status(400).json({message: "error"});

  }
};

const like = (req ,res) => {

  const id = req.params.id;
 
  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });

  datasProtests[findIndex].like = datasProtests[findIndex].like + 1;
  if (datasProtests) {
    return {status:200 , result: datasProtests , message: "success"};
  
  } else {
   
    res.status(400).json({message: "Protesto não encontrado"});

  }
};

const dislike = (req ,res) => {

  const id = req.params.id;
 
  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });
  
  datasProtests[findIndex].dislike = datasProtests[findIndex].dislike + 1;

  if (datasProtests) {

    return {status:200 , result: datasProtests , message: "success"};
  
  } else {
   
    res.status(400).json({message: "Protesto não encontrado"});

  }
};

const remove = (req ,res) => {

  const id = req.params.id;

  let findIndex = datasProtests.findIndex((value) => {
      return value.id == id;
  });

  datasProtests.splice(findIndex, 1);

  if (datasProtests) {

    return {status:200 , result: datasProtests , message: "success"};
  
  } else {
   
    res.status(400).json({message: "Protesto não encontrado"});

  }
};

const allProtest = (req ,res) => {

  if (datasProtests) {

    return {status:200 , result: datasProtests , message: "success"};
  
  } else {
   
    res.status(400).json({message: "Protesto não encontrado"});

  }
};

const findProtest = (req ,res) => {

  const id = req.params.id;
 
  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });
  

  if (datasProtests[findIndex]) {

    return {status:200 , result: datasProtests[findIndex] , message: "success"};
  
  } else {
   
    res.status(400).json({message: "Protesto não encontrado"});

  }
};




module.exports = { create , like , dislike , remove , allProtest , findProtest};