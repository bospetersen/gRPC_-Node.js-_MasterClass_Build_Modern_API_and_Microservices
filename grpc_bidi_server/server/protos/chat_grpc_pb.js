// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_chat_pb = require('../protos/chat_pb.js');

function serialize_chatPackage_ChatRoomRequest(arg) {
  if (!(arg instanceof protos_chat_pb.ChatRoomRequest)) {
    throw new Error('Expected argument of type chatPackage.ChatRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatPackage_ChatRoomRequest(buffer_arg) {
  return protos_chat_pb.ChatRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chatPackage_ChatRoomResponse(arg) {
  if (!(arg instanceof protos_chat_pb.ChatRoomResponse)) {
    throw new Error('Expected argument of type chatPackage.ChatRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatPackage_ChatRoomResponse(buffer_arg) {
  return protos_chat_pb.ChatRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  chatRoom: {
    path: '/chatPackage.ChatService/chatRoom',
    requestStream: true,
    responseStream: true,
    requestType: protos_chat_pb.ChatRoomRequest,
    responseType: protos_chat_pb.ChatRoomResponse,
    requestSerialize: serialize_chatPackage_ChatRoomRequest,
    requestDeserialize: deserialize_chatPackage_ChatRoomRequest,
    responseSerialize: serialize_chatPackage_ChatRoomResponse,
    responseDeserialize: deserialize_chatPackage_ChatRoomResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
