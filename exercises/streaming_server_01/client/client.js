const grpc = require('@grpc/grpc-js');

const pn_decomp = require('../server/protos/prime_number_pb');
const service = require('../server/protos/prime_number_grpc_pb');


function CallPrimeNumberDecomp() {
  const client = new service.PrimeNumberServiceClient(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
  )
  // console.log(service);

  // console.log(client)


  // create request

  const request = new pn_decomp.PrimeNumberRequest();
  const number = 567890;
  request.setNumber(number);

  // console.log(client.target)
  let call = client.primeNumber(request, () => { })

  call.on('data', (response) => {
    console.log('Prime Factor: ' + response.getPrimeFactor())
  });
  
  call.on('status', (status) => {
    console.log(status.details)
  });

  call.on('error', (error) => {
    console.log(error.details)
  });

  call.on('end', () => {
    console.log("Straming ended!")
  })


}


function main() {

  CallPrimeNumberDecomp();

  console.log("Hello from client")

  const client = new service.PrimeNumberServiceClient(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
  )
}

main();
