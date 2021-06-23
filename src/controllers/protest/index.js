const { v4: uuidv4 } = require("uuid");
let  datasProtests = [];

const create = ( user , message ) => {
  let datasProtest = {
    id: uuidv4(),
    user: user,
    message: message,
    like: 0,
    dislike: 0,
  };

  if (datasProtests.push(datasProtest)) {

    return {status:200 , result: datasProtests , message: "Protesto criado"};

  } else {

    return {status:400 , result: datasProtests , message: "Protesto Não criado "};
  
  }
};

const like = ( id ) => {
 
  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });

  datasProtests[findIndex].like = datasProtests[findIndex].like + 1;
  if (datasProtests) {
    return { status:200 , result: datasProtests , message: "success"};
  
  } else {

    return { status:400 , message: "Protesto não encontrado"};

  }
};

const dislike = ( id ) => {

  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });
  
  datasProtests[findIndex].dislike = datasProtests[findIndex].dislike + 1;

  if (datasProtests) {

    return {status:200 , result: datasProtests , message: "success"};
  
  } else {
   
    return { status:400 , message: "Protesto não encontrado"};

  }
};

const remove = ( id ) => {

  let findIndex = datasProtests.findIndex((value) => {
      return value.id == id;
  });

  datasProtests.splice(findIndex, 1);

  if (datasProtests) {

    return {status:200 , result: datasProtests , message: "success"};
  
  } else {
   
    return { status:400 , message: "Protesto não encontrado"};

  }
};

const allProtest = () => {

  if (datasProtests) {

    return {status:200 , result: datasProtests , message: "success"};
  
  } else {
   
    return { status:400 , message: "Protesto não encontrado"};

  }
};

const findProtest = (id) => {
 
  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });
  

  if (datasProtests[findIndex]) {

    return {status:200 , result: datasProtests[findIndex] , message: "success"};
  
  } else {
   
    return { status:400 , message: "Protesto não encontrado"};

  }
};




module.exports = { create , like , dislike , remove , allProtest , findProtest};