const grpc = require('@grpc/grpc-js');
const chatRooms = require('./protos/chat_pb');
const service = require('./protos/chat_grpc_pb');


async function sleep(interval) {
  return new Promise((resolve) => {
    setInterval(() => resolve(), interval);
  });
}

async function chatRoom(call, callback) {


  call.on('data', (response) => {
    let sender = response.getSenderName();
    let date = response.getDate();
    let message = response.getMessage();

    console.log(`${sender} :: ${date}\n   ${message}`);

    // console.log(date)
    // console.log('Hello: ' + sender);
  });
  call.on('error', (error) => {
    console.error(error);
  });
  call.on('end', () => {
    console.log("The end...")
  });


  for (let i = 0; i < 10; i++) {
    var chatMessage = new chatRooms.ChatRoomResponse();

    chatMessage.setSenderName("Bo Slot Petersen");
    chatMessage.setDate(new Date(Date.now()).toString());
    chatMessage.setMessage("Hello there. How are you doing today?");

    call.write(chatMessage);
    await sleep(1500);
  }
  call.end();
}

function main() {
  const server = new grpc.Server();

  server.addService(service.ChatServiceService, {
    chatRoom: chatRoom
  });

  server.bindAsync("127.0.0.1:50052",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.error("Errors: ", error);
      console.log('Bidirectional gRPC-Server');
      console.log('Server listening on 127.0.0.1:50052');
      server.start();
    })
}

main();