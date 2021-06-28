const { v4: uuidv4 } = require("uuid");
let datasProtests = [];

const create = (user, message) => {

  let datasProtest = {
    id: uuidv4(),
    user: user,
    message: message,
    like: 0,
    dislike: 0,
  };

  if (user && message) {
    datasProtests.push(datasProtest);
    return { status: 200, result: datasProtests, message: "Protest created" };
  } else {
    return { status: 400, result: datasProtests, message: "Protest not created" };
  }
};

const like = (id) => {
  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });

  if (findIndex >= 0) {
    datasProtests[findIndex].like = datasProtests[findIndex].like + 1;
    return { status: 200, result: datasProtests, message: "success" };
  } else {
    return { status: 400, message: "Protest not found" };
  }
};

const dislike = (id) => {

  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });

  if (findIndex >= 0) {
    datasProtests[findIndex].dislike = datasProtests[findIndex].dislike + 1;
    return { status: 200, result: datasProtests, message: "success" };
  } else {
    return { status: 400, message: "Protest not found" };
  }
};

const remove = (id) => {

  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });

  datasProtests.splice(findIndex, 1);

  if (findIndex >= 0) {
    return { status: 200, message: "success", result: datasProtests };
  } else {
    return { status: 400, message: "Protest not found" };
  }
};

const all = () => {
  if (datasProtests.length > 0) {
    return { status: 200, result: datasProtests, message: "success" };
  } else {
    return { status: 400, message: "Protest not found" };
  }
};

const find = (id) => {

  let findIndex = datasProtests.findIndex((value) => {
    return value.id == id;
  });

  if (datasProtests[findIndex]) {
    return { status: 200, result: datasProtests[findIndex], message: "success" };
  } else {
    return { status: 400, message: "Protest not found" };
  }

};

const resetData = () => {
  if (datasProtests.length > 0)
    datasProtests = [];
};

module.exports = { create, like, dislike, remove, all, find, resetData };