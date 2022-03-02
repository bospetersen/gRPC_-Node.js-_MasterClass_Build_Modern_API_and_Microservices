// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_long_message_pb = require('../protos/long_message_pb.js');

function serialize_message_MessageRequest(arg) {
  if (!(arg instanceof protos_long_message_pb.MessageRequest)) {
    throw new Error('Expected argument of type message.MessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_message_MessageRequest(buffer_arg) {
  return protos_long_message_pb.MessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_message_MessageResponse(arg) {
  if (!(arg instanceof protos_long_message_pb.MessageResponse)) {
    throw new Error('Expected argument of type message.MessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_message_MessageResponse(buffer_arg) {
  return protos_long_message_pb.MessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageServiceService = exports.MessageServiceService = {
  messageSender: {
    path: '/message.MessageService/MessageSender',
    requestStream: true,
    responseStream: false,
    requestType: protos_long_message_pb.MessageRequest,
    responseType: protos_long_message_pb.MessageResponse,
    requestSerialize: serialize_message_MessageRequest,
    requestDeserialize: deserialize_message_MessageRequest,
    responseSerialize: serialize_message_MessageResponse,
    responseDeserialize: deserialize_message_MessageResponse,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
