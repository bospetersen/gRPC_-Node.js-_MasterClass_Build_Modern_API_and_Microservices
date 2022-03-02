const grpc = require('@grpc/grpc-js');
const avr = require('../server/protos/average_pb');
const service = require('../server/protos/average_grpc_pb');

function CallAvrNumbers() {
  let client = new service.CalculateAverageClient(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
  );



  let request = new avr.CalcAvrRequest();

  const call = client.calcAvr(request, (error, response) => {
    if (!error) {
      console.log('Server response: ', response.getAverage())
    } else {
      console.error(error);
    }
  });

  const avr_list = [1, 2, 3, 4, 13];

  for (let i = 0; i < avr_list.length; i++) {
    request = new avr.CalcAvrRequest();
    request.setNumber(avr_list[i]);
    call.write(request);
  }

  // for (let i = 0; i < 10000; i++) {
  //   request1 = new avr.CalcAvrRequest();
  //   request1.setNumber(i);
  //   call.write(request1);
  // }

  // request1 = new avr.CalcAvrRequest();
  // request1.setNumber(1);
  // call.write(request1);
  // request2 = new avr.CalcAvrRequest();
  // request2.setNumber(2);
  // call.write(request2);
  // request3 = new avr.CalcAvrRequest();
  // request3.setNumber(3);
  // call.write(request3);
  // request4 = new avr.CalcAvrRequest();
  // request4.setNumber(4);
  // call.write(request4);

  call.end();


}

function main() {
  CallAvrNumbers();
}

main();