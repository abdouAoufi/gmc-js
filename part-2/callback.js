function runCallBack(callBack, msg) {
  callBack(msg);
}

function callBack(message) {
  console.log(message);
}

function printName(name) {
  console.log("This person's name is", name);
}

runCallBack(callBack, "Hi it's me again");


runCallBack(printName , "Abderahmane")