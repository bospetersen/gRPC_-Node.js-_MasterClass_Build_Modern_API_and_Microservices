const grpc = require('@grpc/grpc-js');
const squRoot = require('../server/protos/square_root_pb');
const service = require('../server/protos/square_root_grpc_pb');

const fs = require('fs');
var path = require("path");
var absolutePath = path.resolve("./certs/");


function getRPCDeadline(rpcType) {
  let timeAllowed = 5000;

  switch (rpcType) {
    case 1:
      timeAllowed = 1000;
      break;
    case 2:
      timeAllowed = 7000;
      break;

    default:
      console.log("Invalid RPC type: Using default Timeout")
      break;
  }
  return new Date(Date.now() + timeAllowed);
}




function CallSquareRoot() {

  let deadline = getRPCDeadline(1);

// console.log(`${absolutePath}/ca.crt`)
  let credentials = grpc.credentials.createSsl(
    fs.readFileSync(`${absolutePath}/ca.crt`),
    fs.readFileSync(`${absolutePath}/client.key`),
    fs.readFileSync(`${absolutePath}/client.crt`)
  );

  let unsafeCreds = grpc.credentials.createInsecure()

  const client = new service.SquareRootClient(
    "localhost:50051", unsafeCreds
  );

  let number = 1151;
  const request = new squRoot.SquareRootRequest();
  request.setNumber(number);


  client.squareRoot(request, { deadline: deadline }, (error, response) => {
    if (!error) {
      console.log("Square root of " + number + " = ", response.getSquaredNumber());
    } else {
      console.error(error.code);
      console.error(error.message);
    }
  })
}


function main() {
  CallSquareRoot();
}

main();