const grpc = require('@grpc/grpc-js');
const calcs = require('../server/protos/calculator_pb');
const service = require('../server/protos/calculator_grpc_pb');


function main() {
  const client = new service.AddServiceClient(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
  )
 
  // create request
  const request = new calcs.AddRequest();

  const nb1 = 10;
  const nb2 = 13;

  // Create the protocol buffer calculation message. 
  const calculating = new calcs.AddRequest();
  calculating.setFirstNumber(nb1);
  calculating.setSecondNumber(nb2);


  client.add(calculating, (error, response) => {
    if (!error) {
      let res = "Result: " + response.getResult();
      console.log(`Calculator 2000: Sum of ${nb1} + ${nb2}`);
      console.log(res);
    } else {
      console.error(error);
    }
  })
}
main();