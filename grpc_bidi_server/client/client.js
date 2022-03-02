const grpc = require('@grpc/grpc-js');
const chatRooms = require('../server/protos/chat_pb');
const service = require('../server/protos/chat_grpc_pb');

async function sleep(interval) {
  return new Promise((resolve) => {
    setInterval(() => resolve(), interval);
  });
}

async function CallBiDi() {

  console.log('Hello from client');

  let client = new service.ChatServiceClient(
    "localhost:50052",
    grpc.credentials.createInsecure()
  );

  let request = '';
  const call = client.chatRoom(request, (error, response) => {
    console.log('Server Response: ' + response)
  });


  call.on('data', (response) => {
    console.log("Hello Client: " + response);
  });
  call.on('error', (error) => {
    console.error(error)
  });
  call.on('end', () => {
    console.log("This is the end from the client side")
  });


  for (i = 0; i < 10; i++) {
    var reqMessage = new chatRooms.ChatRoomRequest();
    reqMessage.setSenderName("Bo Slot Petersen");
    reqMessage.setDate(new Date(Date.now()).toString());
    reqMessage.setMessage("What are you up to today?");
    call.write(reqMessage);
    await sleep(1000);
  }

  call.end();

}


function main() {
  CallBiDi()
}

main();


// https://www.youtube.com/channel/UCf96AoxAYrgATXOJJi_xmyg