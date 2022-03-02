// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_todo_pb = require('../protos/todo_pb.js');

function serialize_todoPackage_TodoItemRequest(arg) {
  if (!(arg instanceof protos_todo_pb.TodoItemRequest)) {
    throw new Error('Expected argument of type todoPackage.TodoItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todoPackage_TodoItemRequest(buffer_arg) {
  return protos_todo_pb.TodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todoPackage_TodoItemResponse(arg) {
  if (!(arg instanceof protos_todo_pb.TodoItemResponse)) {
    throw new Error('Expected argument of type todoPackage.TodoItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todoPackage_TodoItemResponse(buffer_arg) {
  return protos_todo_pb.TodoItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todoPackage_TodoItems(arg) {
  if (!(arg instanceof protos_todo_pb.TodoItems)) {
    throw new Error('Expected argument of type todoPackage.TodoItems');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todoPackage_TodoItems(buffer_arg) {
  return protos_todo_pb.TodoItems.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todoPackage_noParams(arg) {
  if (!(arg instanceof protos_todo_pb.noParams)) {
    throw new Error('Expected argument of type todoPackage.noParams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todoPackage_noParams(buffer_arg) {
  return protos_todo_pb.noParams.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoService = exports.TodoService = {
  createTodos: {
    path: '/todoPackage.Todo/createTodos',
    requestStream: false,
    responseStream: false,
    requestType: protos_todo_pb.TodoItemRequest,
    responseType: protos_todo_pb.TodoItemResponse,
    requestSerialize: serialize_todoPackage_TodoItemRequest,
    requestDeserialize: deserialize_todoPackage_TodoItemRequest,
    responseSerialize: serialize_todoPackage_TodoItemResponse,
    responseDeserialize: deserialize_todoPackage_TodoItemResponse,
  },
  readTodos: {
    path: '/todoPackage.Todo/readTodos',
    requestStream: false,
    responseStream: false,
    requestType: protos_todo_pb.noParams,
    responseType: protos_todo_pb.TodoItems,
    requestSerialize: serialize_todoPackage_noParams,
    requestDeserialize: deserialize_todoPackage_noParams,
    responseSerialize: serialize_todoPackage_TodoItems,
    responseDeserialize: deserialize_todoPackage_TodoItems,
  },
};

exports.TodoClient = grpc.makeGenericClientConstructor(TodoService);
