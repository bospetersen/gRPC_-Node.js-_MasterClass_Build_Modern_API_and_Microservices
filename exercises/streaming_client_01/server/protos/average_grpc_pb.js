// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_average_pb = require('../protos/average_pb.js');

function serialize_averagePackage_CalcAvrRequest(arg) {
  if (!(arg instanceof protos_average_pb.CalcAvrRequest)) {
    throw new Error('Expected argument of type averagePackage.CalcAvrRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_averagePackage_CalcAvrRequest(buffer_arg) {
  return protos_average_pb.CalcAvrRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_averagePackage_CalcAvrResponse(arg) {
  if (!(arg instanceof protos_average_pb.CalcAvrResponse)) {
    throw new Error('Expected argument of type averagePackage.CalcAvrResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_averagePackage_CalcAvrResponse(buffer_arg) {
  return protos_average_pb.CalcAvrResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculateAverageService = exports.CalculateAverageService = {
  calcAvr: {
    path: '/averagePackage.CalculateAverage/calcAvr',
    requestStream: true,
    responseStream: false,
    requestType: protos_average_pb.CalcAvrRequest,
    responseType: protos_average_pb.CalcAvrResponse,
    requestSerialize: serialize_averagePackage_CalcAvrRequest,
    requestDeserialize: deserialize_averagePackage_CalcAvrRequest,
    responseSerialize: serialize_averagePackage_CalcAvrResponse,
    responseDeserialize: deserialize_averagePackage_CalcAvrResponse,
  },
};

exports.CalculateAverageClient = grpc.makeGenericClientConstructor(CalculateAverageService);
