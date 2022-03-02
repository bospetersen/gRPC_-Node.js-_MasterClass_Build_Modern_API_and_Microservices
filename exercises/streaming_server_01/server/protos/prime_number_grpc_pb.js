// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_prime_number_pb = require('../protos/prime_number_pb.js');

function serialize_PrimeNumberDecomposition_PrimeNumberRequest(arg) {
  if (!(arg instanceof protos_prime_number_pb.PrimeNumberRequest)) {
    throw new Error('Expected argument of type PrimeNumberDecomposition.PrimeNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PrimeNumberDecomposition_PrimeNumberRequest(buffer_arg) {
  return protos_prime_number_pb.PrimeNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PrimeNumberDecomposition_PrimeNumberResponse(arg) {
  if (!(arg instanceof protos_prime_number_pb.PrimeNumberResponse)) {
    throw new Error('Expected argument of type PrimeNumberDecomposition.PrimeNumberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PrimeNumberDecomposition_PrimeNumberResponse(buffer_arg) {
  return protos_prime_number_pb.PrimeNumberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PrimeNumberServiceService = exports.PrimeNumberServiceService = {
  // Streaming API
primeNumber: {
    path: '/PrimeNumberDecomposition.PrimeNumberService/PrimeNumber',
    requestStream: false,
    responseStream: true,
    requestType: protos_prime_number_pb.PrimeNumberRequest,
    responseType: protos_prime_number_pb.PrimeNumberResponse,
    requestSerialize: serialize_PrimeNumberDecomposition_PrimeNumberRequest,
    requestDeserialize: deserialize_PrimeNumberDecomposition_PrimeNumberRequest,
    responseSerialize: serialize_PrimeNumberDecomposition_PrimeNumberResponse,
    responseDeserialize: deserialize_PrimeNumberDecomposition_PrimeNumberResponse,
  },
};

exports.PrimeNumberServiceClient = grpc.makeGenericClientConstructor(PrimeNumberServiceService);
