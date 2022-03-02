const grpc = require('@grpc/grpc-js');
const maxNb = require('./protos/find_maximum_pb');
const service = require('./protos/find_maximum_grpc_pb');

function findMaximum(call, callback) {
  const request = new maxNb.FindMaximumRequest()
  const response = new maxNb.FindMaximumResponse();
  response.setMaximumNumber(1000);
  console.log(call.request);
  // console.log(response)
  // call.write(response);
  // callback(null, request);

};

function main() {
  const server = new grpc.Server();

  server.addService(
    service.FindMaximumService, { findMaximum: findMaximum }
  )
  server.bindAsync("127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.error("Errors: " + error);
      console.log("Bidirectional streaming server");
      console.log("Server is running listening on port 127.0.0.1:50051");
      server.start();
    }
  )
}
main();