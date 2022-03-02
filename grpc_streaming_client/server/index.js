const grpc = require('@grpc/grpc-js');
const message = require('./protos/long_message_pb');
const service = require('./protos/long_message_grpc_pb')

function messageSender(call, callback) {
  call.on('data', (request) => {
    let sender = request.getSender();
    let message = request.getMessage();
    console.log("Hello " + sender + ' - ' + message);
  });

  call.on('error', (error) => {
    console.log(error);
  });

  call.on('end', () => {
    let response = new message.MessageResponse();
    response.setMessageResult("\nLong message streaming:\nEnd Response from server!...");

    callback(null, response)
  });

}


function main() {
  const server = new grpc.Server();

  server.addService(service.MessageServiceService, {
    messageSender: messageSender
  });

  server.bindAsync('127.0.0.1:50051',
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log(error)
      console.log("gRPC-course-files - Streaming client")
      console.log("Server running at http://127.0.0.1:50051");
      server.start();
    });
}

main()