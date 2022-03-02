// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_find_maximum_pb = require('../protos/find_maximum_pb.js');

function serialize_FindMaxPackage_FindMaximumRequest(arg) {
  if (!(arg instanceof protos_find_maximum_pb.FindMaximumRequest)) {
    throw new Error('Expected argument of type FindMaxPackage.FindMaximumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FindMaxPackage_FindMaximumRequest(buffer_arg) {
  return protos_find_maximum_pb.FindMaximumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FindMaxPackage_FindMaximumResponse(arg) {
  if (!(arg instanceof protos_find_maximum_pb.FindMaximumResponse)) {
    throw new Error('Expected argument of type FindMaxPackage.FindMaximumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FindMaxPackage_FindMaximumResponse(buffer_arg) {
  return protos_find_maximum_pb.FindMaximumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FindMaximumService = exports.FindMaximumService = {
  findMaximum: {
    path: '/FindMaxPackage.FindMaximum/findMaximum',
    requestStream: true,
    responseStream: true,
    requestType: protos_find_maximum_pb.FindMaximumRequest,
    responseType: protos_find_maximum_pb.FindMaximumResponse,
    requestSerialize: serialize_FindMaxPackage_FindMaximumRequest,
    requestDeserialize: deserialize_FindMaxPackage_FindMaximumRequest,
    responseSerialize: serialize_FindMaxPackage_FindMaximumResponse,
    responseDeserialize: deserialize_FindMaxPackage_FindMaximumResponse,
  },
};

exports.FindMaximumClient = grpc.makeGenericClientConstructor(FindMaximumService);
