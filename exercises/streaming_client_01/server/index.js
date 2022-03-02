const grpc = require('@grpc/grpc-js');
const avr = require('./protos/average_pb');
const service = require('./protos/average_grpc_pb');


function calcAvr(call, callback) {

  let count = 0;
  let sum = 0;

  call.on('data', (request) => {
    sum += request.getNumber();
    console.log(`Got number: ${request.getNumber()} - Current sum:  ${sum} `)
    count++
  });

  call.on('error', (error) => {
    console.error(error);
  });

  call.on('end', () => {
    let avrs = sum / count;
    let response = new avr.CalcAvrResponse();
    response.setAverage(`${avrs}`);

    callback(null, response);
  });
}


function main() {
  const server = new grpc.Server();

  server.addService(service.CalculateAverageService, {
    calcAvr: calcAvr
  });

  server.bindAsync(
    '127.0.0.1:50051',
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.error(error);
      console.log("gRPC exercises - Streaming client 01")
      console.log("Server running at http://127.0.0.1:50051");
      server.start();
    }
  )
}

main();