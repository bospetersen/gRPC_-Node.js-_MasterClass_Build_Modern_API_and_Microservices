const grpc = require('@grpc/grpc-js');
const squRoot = require('./protos/square_root_pb');
const service = require('./protos/square_root_grpc_pb');
const fs = require('fs');

var path = require("path");
var absolutePath = path.resolve("./certs/");

// console.log("path to certificate: " + absolutePath)

function squareRoot(call, callback) {
  let response = new squRoot.SquareRootResponse();
  let number = call.request.getNumber();

  if (number >= 0) {
    let sqrt = Math.sqrt(number);
    response.setSquaredNumber(sqrt)
    console.log("Square root of " + number + " = " + sqrt);
    callback(null, response);
  } else {
    // error handling
    return callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: `The number being sent has to be positive!\nNumber sent: ${number}`
    })



  }

}

function main() {

  let credentials = grpc.ServerCredentials.createSsl(
    fs.readFileSync(`${absolutePath}/ca.crt`),
    [{
      private_key: fs.readFileSync(`${absolutePath}/server.key`),
      cert_chain: fs.readFileSync(`${absolutePath}/server.crt`)
    }], true);

  let unsafeCreds = grpc.ServerCredentials.createInsecure();


  const server = new grpc.Server();

  server.addService(service.SquareRootService, {
    squareRoot: squareRoot
  });

  // console.log(`${absolutePath}/ca.crt`)
  server.bindAsync("127.0.0.1:50051",
    unsafeCreds,
    (error, port) => {
      console.error("Error: " + error);
      console.log("Unery server with error handling, deadline and SSL");
      console.log("Server running, listning on port 127.0.0.1:50051");
      server.start();
    }
  );
}

main();