// source: protos/storage_message.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var protos_memory_message_pb = require('../protos/memory_message_pb.js');
goog.object.extend(proto, protos_memory_message_pb);
goog.exportSymbol('proto.bsp.kbh.Storage', null, global);
goog.exportSymbol('proto.bsp.kbh.Storage.Driver', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bsp.kbh.Storage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp.kbh.Storage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp.kbh.Storage.displayName = 'proto.bsp.kbh.Storage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bsp.kbh.Storage.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp.kbh.Storage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp.kbh.Storage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp.kbh.Storage.toObject = function(includeInstance, msg) {
  var f, obj = {
    driver: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memory: (f = msg.getMemory()) && protos_memory_message_pb.Memory.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bsp.kbh.Storage}
 */
proto.bsp.kbh.Storage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp.kbh.Storage;
  return proto.bsp.kbh.Storage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp.kbh.Storage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp.kbh.Storage}
 */
proto.bsp.kbh.Storage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp.kbh.Storage.Driver} */ (reader.readEnum());
      msg.setDriver(value);
      break;
    case 2:
      var value = new protos_memory_message_pb.Memory;
      reader.readMessage(value,protos_memory_message_pb.Memory.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bsp.kbh.Storage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp.kbh.Storage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp.kbh.Storage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp.kbh.Storage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDriver();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      protos_memory_message_pb.Memory.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bsp.kbh.Storage.Driver = {
  UNKNOWN: 0,
  SSD: 1,
  HDD: 2
};

/**
 * optional Driver driver = 1;
 * @return {!proto.bsp.kbh.Storage.Driver}
 */
proto.bsp.kbh.Storage.prototype.getDriver = function() {
  return /** @type {!proto.bsp.kbh.Storage.Driver} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp.kbh.Storage.Driver} value
 * @return {!proto.bsp.kbh.Storage} returns this
 */
proto.bsp.kbh.Storage.prototype.setDriver = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Memory memory = 2;
 * @return {?proto.bsp.kbh.Memory}
 */
proto.bsp.kbh.Storage.prototype.getMemory = function() {
  return /** @type{?proto.bsp.kbh.Memory} */ (
    jspb.Message.getWrapperField(this, protos_memory_message_pb.Memory, 2));
};


/**
 * @param {?proto.bsp.kbh.Memory|undefined} value
 * @return {!proto.bsp.kbh.Storage} returns this
*/
proto.bsp.kbh.Storage.prototype.setMemory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp.kbh.Storage} returns this
 */
proto.bsp.kbh.Storage.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Storage.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.bsp.kbh);
