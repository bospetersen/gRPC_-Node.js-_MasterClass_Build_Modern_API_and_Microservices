const grpc = require('@grpc/grpc-js');
const maxNb = require('../server/protos/find_maximum_pb');
const service = require('../server/protos/find_maximum_grpc_pb');

function CallFindMax() {
  const client = new service.FindMaximumClient(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
  );

  const request = new maxNb.FindMaximumRequest();
  request.setReqNumber(1000)
  const call = client.findMaximum(request, (error, response) => {
    console.log("getMaximumNumber: " + response.getMaximumNumber())
  });

  call.end();



}

function main() { CallFindMax() }
main();