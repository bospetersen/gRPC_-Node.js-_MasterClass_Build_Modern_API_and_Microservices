const grpc = require('@grpc/grpc-js');
const message = require('../server/protos/long_message_pb');
const service = require('../server/protos/long_message_grpc_pb');

function CallMessageSender() {
  let client = new service.MessageServiceClient(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
  );


  // console.log(client)
  // console.log('Hello from client:....');
  // request=''


  let request = new message.MessageRequest();

  const call = client.messageSender(request, (error, response) => {
    if (!error) {
      console.log('Server response: ', response.getMessageResult())
    } else {
      console.error(error); 
    }
  });
    
    
    
    let count = 0, intervallID = setInterval(() => {
      console.log('Sending message: ' + count);
      let request = new message.MessageRequest();
      request.setSender("Bo Slot Petersen")
      request.setMessage("Message from Client")
      // request.setMessage()
      call.write(request);
      
      if (++count > 5) {
        clearInterval(intervallID);
        call.end();
      }

    }, 1000);
}

function main() {
  CallMessageSender();
}

main();