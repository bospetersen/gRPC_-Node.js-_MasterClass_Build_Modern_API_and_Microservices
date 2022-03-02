const grpc = require("@grpc/grpc-js");
const greets = require('./protos/greet_pb');
const service = require('./protos/greet_grpc_pb');

/*
IMPLEMENT: Greet RPC methods.
*/ 

function greet(call, callback) {
  const greeting = new greets.GreetResponse();

  greeting.setResult(
    // console.log(
      'Hello' + ' ' + call.request.getGreeting().getFirstName() + ' ' + call.request.getGreeting().getLastName()
    // )
    // + call.request.getGreeting().setLastName()
  )

  callback(null, greeting);
}




function main() {

  const server = new grpc.Server();

  server.addService(service.GreetServiceService, { greet: greet })

  server.bindAsync(
    "127.0.0.1:50052", 
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("gRPC-course-files")
      console.log("Server running at http://127.0.0.1:50052");
      server.start();
    }
  );


}

main();

