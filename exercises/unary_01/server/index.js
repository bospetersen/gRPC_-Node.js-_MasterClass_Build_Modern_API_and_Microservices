const grpc = require("@grpc/grpc-js");
const calc = require('./protos/calculator_pb');
const service = require('./protos/calculator_grpc_pb');

/*
IMPLEMENT: Greet RPC methods.
*/
function add(call, callback) {
  let adding = new calc.AddResponse();

  adding.setResult(
    call.request.getFirstNumber() + call.request.getSecondNumber()
    )

  callback(null, adding);
}

function main() {

  const server = new grpc.Server();

  server.addService(service.AddServiceService, { add: add })

  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("Unery_01 exersice")
      console.log("Server running at http://127.0.0.1:50051");
      server.start();
    }
  );


}

main();

