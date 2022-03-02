const grpc = require("@grpc/grpc-js");
const greets = require('./protos/greet_pb');
const service = require('./protos/greet_grpc_pb');

function greet(call, callback) {
  const greeting = new greets.GreetResponse();

  greeting.setResult(
    'Hello' + ' ' + call.request.getGreeting().getFirstName() + ' ' + call.request.getGreeting().getLastName()
  )

  callback(null, greeting);
}


function greetManyTimes(call) {
  const firstName = call.request.getGreeting().getFirstName();

  let count = 0; intervalID = setInterval(() => {

    const greetManyTimesResponse = new greets.GreetManyTimesResponse();
    greetManyTimesResponse.setResult(firstName);

    //Setup straming
    call.write(greetManyTimesResponse);

    if (++count > 9) {
      clearInterval(intervalID)
      call.end(); // We are done
    }

  }, 1000);
}




function main() {

  const server = new grpc.Server();

  server.addService(service.GreetServiceService, {
    greet: greet,
    greetManyTimes: greetManyTimes
  })

  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("gRPC-course-files - Streaming server")
      console.log("Server running at http://127.0.0.1:50051");
      server.start();
    }
  );


}

main();

