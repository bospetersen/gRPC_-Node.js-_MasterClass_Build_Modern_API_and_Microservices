// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_calculator_pb = require('../protos/calculator_pb.js');

function serialize_calculator_AddRequest(arg) {
  if (!(arg instanceof protos_calculator_pb.AddRequest)) {
    throw new Error('Expected argument of type calculator.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_AddRequest(buffer_arg) {
  return protos_calculator_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_AddResponse(arg) {
  if (!(arg instanceof protos_calculator_pb.AddResponse)) {
    throw new Error('Expected argument of type calculator.AddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_AddResponse(buffer_arg) {
  return protos_calculator_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AddServiceService = exports.AddServiceService = {
  // Unary API
add: {
    path: '/calculator.AddService/Add',
    requestStream: false,
    responseStream: false,
    requestType: protos_calculator_pb.AddRequest,
    responseType: protos_calculator_pb.AddResponse,
    requestSerialize: serialize_calculator_AddRequest,
    requestDeserialize: deserialize_calculator_AddRequest,
    responseSerialize: serialize_calculator_AddResponse,
    responseDeserialize: deserialize_calculator_AddResponse,
  },
};

exports.AddServiceClient = grpc.makeGenericClientConstructor(AddServiceService);
