const grpc = require('@grpc/grpc-js');
const todoSys = require('./protos/todo_pb');
const service = require('./protos/todo_grpc_pb');




const server = new grpc.Server();
server.bindAsync("127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Streaming_server_01 exersice")
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  })

server.addService(service.TodoService, {
  createTodos: createTodos
});
function createTodos() {

}
