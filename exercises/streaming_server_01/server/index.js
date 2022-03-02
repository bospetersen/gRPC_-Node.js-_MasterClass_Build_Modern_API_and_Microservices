const grpc = require('@grpc/grpc-js');
const pn_decomp = require('./protos/prime_number_pb');
const service = require('./protos/prime_number_grpc_pb');


function primeNumber(call, callback) {
  console.log('Prime Number Decomposition');
  let number = call.request.getNumber();
  let divisor = 2;

  console.log("Recived number: " + number)

  while (number > 1) {
    if (number % divisor === 0) {
      let primeNumberResponse = new pn_decomp.PrimeNumberResponse();
      primeNumberResponse.setPrimeFactor(divisor);

      number = number / divisor;
      
      call.write(primeNumberResponse)
    }
    else {
      divisor++;
      console.log("Divisor has increased to: " + divisor)
    }
  }
  call.end();
}

function main() {
  
  const server = new grpc.Server();
  
  server.addService(service.PrimeNumberServiceService, { 
    primeNumber: primeNumber 
  });
  // console.log(server)

  
  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log("Streaming_server_01 exersice")
      console.log("Server running at http://127.0.0.1:50051");
      server.start();
    }
    );


}

main();