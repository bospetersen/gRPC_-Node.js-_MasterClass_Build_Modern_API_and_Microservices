const grpc = require('@grpc/grpc-js');

const greets = require('../server/protos/greet_pb');
const service = require('../server/protos/greet_grpc_pb');


function main() {
  console.log("Hello from client")

  const client = new service.GreetServiceClient(
    "127.0.0.1:50052",
    grpc.credentials.createInsecure()
  )

  // create request
  const request = new greets.GreetRequest();

  // Create the protocol buffer greeting message. 
  const greeting = new greets.Greeting();
  greeting.setFirstName("Bo")
  greeting.setLastName("Slot")

  request.setGreeting(greeting);

  client.greet(request, (error, response) => {
    if (!error) {
      let res =  "Greeting Response: "+ response.getResult();
      console.log(res);
    } else {
      console.error(error);
    }
  })



}

main();