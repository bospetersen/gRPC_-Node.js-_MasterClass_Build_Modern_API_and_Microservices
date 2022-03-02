// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_square_root_pb = require('../protos/square_root_pb.js');

function serialize_squareRootPackage_SquareRootRequest(arg) {
  if (!(arg instanceof protos_square_root_pb.SquareRootRequest)) {
    throw new Error('Expected argument of type squareRootPackage.SquareRootRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_squareRootPackage_SquareRootRequest(buffer_arg) {
  return protos_square_root_pb.SquareRootRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_squareRootPackage_SquareRootResponse(arg) {
  if (!(arg instanceof protos_square_root_pb.SquareRootResponse)) {
    throw new Error('Expected argument of type squareRootPackage.SquareRootResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_squareRootPackage_SquareRootResponse(buffer_arg) {
  return protos_square_root_pb.SquareRootResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SquareRootService = exports.SquareRootService = {
  squareRoot: {
    path: '/squareRootPackage.SquareRoot/squareRoot',
    requestStream: false,
    responseStream: false,
    requestType: protos_square_root_pb.SquareRootRequest,
    responseType: protos_square_root_pb.SquareRootResponse,
    requestSerialize: serialize_squareRootPackage_SquareRootRequest,
    requestDeserialize: deserialize_squareRootPackage_SquareRootRequest,
    responseSerialize: serialize_squareRootPackage_SquareRootResponse,
    responseDeserialize: deserialize_squareRootPackage_SquareRootResponse,
  },
};

exports.SquareRootClient = grpc.makeGenericClientConstructor(SquareRootService);
