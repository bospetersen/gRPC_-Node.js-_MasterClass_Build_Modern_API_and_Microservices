// source: protos/labtop_message.proto
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

var protos_keyboard_message_pb = require('../protos/keyboard_message_pb.js');
goog.object.extend(proto, protos_keyboard_message_pb);
var protos_memory_message_pb = require('../protos/memory_message_pb.js');
goog.object.extend(proto, protos_memory_message_pb);
var protos_processor_message_pb = require('../protos/processor_message_pb.js');
goog.object.extend(proto, protos_processor_message_pb);
var protos_screen_message_pb = require('../protos/screen_message_pb.js');
goog.object.extend(proto, protos_screen_message_pb);
var protos_storage_message_pb = require('../protos/storage_message_pb.js');
goog.object.extend(proto, protos_storage_message_pb);
var protos_timestamp_pb = require('../protos/timestamp_pb.js');
goog.object.extend(proto, protos_timestamp_pb);
goog.exportSymbol('proto.bsp.kbh.Labtop', null, global);
goog.exportSymbol('proto.bsp.kbh.Labtop.WightCase', null, global);
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
proto.bsp.kbh.Labtop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bsp.kbh.Labtop.repeatedFields_, proto.bsp.kbh.Labtop.oneofGroups_);
};
goog.inherits(proto.bsp.kbh.Labtop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp.kbh.Labtop.displayName = 'proto.bsp.kbh.Labtop';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bsp.kbh.Labtop.repeatedFields_ = [6,7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bsp.kbh.Labtop.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.bsp.kbh.Labtop.WightCase = {
  WIGHT_NOT_SET: 0,
  WEIGHT_KG: 10,
  WEIGHT_LB: 11
};

/**
 * @return {proto.bsp.kbh.Labtop.WightCase}
 */
proto.bsp.kbh.Labtop.prototype.getWightCase = function() {
  return /** @type {proto.bsp.kbh.Labtop.WightCase} */(jspb.Message.computeOneofCase(this, proto.bsp.kbh.Labtop.oneofGroups_[0]));
};



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
proto.bsp.kbh.Labtop.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp.kbh.Labtop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp.kbh.Labtop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp.kbh.Labtop.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cpu: (f = msg.getCpu()) && protos_processor_message_pb.CPU.toObject(includeInstance, f),
    memory: (f = msg.getMemory()) && protos_memory_message_pb.Memory.toObject(includeInstance, f),
    gpusList: jspb.Message.toObjectList(msg.getGpusList(),
    protos_processor_message_pb.GPU.toObject, includeInstance),
    storageList: jspb.Message.toObjectList(msg.getStorageList(),
    protos_storage_message_pb.Storage.toObject, includeInstance),
    screen: (f = msg.getScreen()) && protos_screen_message_pb.Screen.toObject(includeInstance, f),
    kayboard: (f = msg.getKayboard()) && protos_keyboard_message_pb.Keyboard.toObject(includeInstance, f),
    weightKg: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    weightLb: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    priceUsd: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    releaseYear: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    updatedAt: (f = msg.getUpdatedAt()) && protos_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.bsp.kbh.Labtop}
 */
proto.bsp.kbh.Labtop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp.kbh.Labtop;
  return proto.bsp.kbh.Labtop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp.kbh.Labtop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp.kbh.Labtop}
 */
proto.bsp.kbh.Labtop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new protos_processor_message_pb.CPU;
      reader.readMessage(value,protos_processor_message_pb.CPU.deserializeBinaryFromReader);
      msg.setCpu(value);
      break;
    case 5:
      var value = new protos_memory_message_pb.Memory;
      reader.readMessage(value,protos_memory_message_pb.Memory.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    case 6:
      var value = new protos_processor_message_pb.GPU;
      reader.readMessage(value,protos_processor_message_pb.GPU.deserializeBinaryFromReader);
      msg.addGpus(value);
      break;
    case 7:
      var value = new protos_storage_message_pb.Storage;
      reader.readMessage(value,protos_storage_message_pb.Storage.deserializeBinaryFromReader);
      msg.addStorage(value);
      break;
    case 8:
      var value = new protos_screen_message_pb.Screen;
      reader.readMessage(value,protos_screen_message_pb.Screen.deserializeBinaryFromReader);
      msg.setScreen(value);
      break;
    case 9:
      var value = new protos_keyboard_message_pb.Keyboard;
      reader.readMessage(value,protos_keyboard_message_pb.Keyboard.deserializeBinaryFromReader);
      msg.setKayboard(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeightKg(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeightLb(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceUsd(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReleaseYear(value);
      break;
    case 14:
      var value = new protos_timestamp_pb.Timestamp;
      reader.readMessage(value,protos_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
proto.bsp.kbh.Labtop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp.kbh.Labtop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp.kbh.Labtop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp.kbh.Labtop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCpu();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      protos_processor_message_pb.CPU.serializeBinaryToWriter
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      protos_memory_message_pb.Memory.serializeBinaryToWriter
    );
  }
  f = message.getGpusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      protos_processor_message_pb.GPU.serializeBinaryToWriter
    );
  }
  f = message.getStorageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      protos_storage_message_pb.Storage.serializeBinaryToWriter
    );
  }
  f = message.getScreen();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      protos_screen_message_pb.Screen.serializeBinaryToWriter
    );
  }
  f = message.getKayboard();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      protos_keyboard_message_pb.Keyboard.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getPriceUsd();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getReleaseYear();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      protos_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bsp.kbh.Labtop.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brand = 2;
 * @return {string}
 */
proto.bsp.kbh.Labtop.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.bsp.kbh.Labtop.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CPU cpu = 4;
 * @return {?proto.bsp.kbh.CPU}
 */
proto.bsp.kbh.Labtop.prototype.getCpu = function() {
  return /** @type{?proto.bsp.kbh.CPU} */ (
    jspb.Message.getWrapperField(this, protos_processor_message_pb.CPU, 4));
};


/**
 * @param {?proto.bsp.kbh.CPU|undefined} value
 * @return {!proto.bsp.kbh.Labtop} returns this
*/
proto.bsp.kbh.Labtop.prototype.setCpu = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearCpu = function() {
  return this.setCpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Labtop.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Memory memory = 5;
 * @return {?proto.bsp.kbh.Memory}
 */
proto.bsp.kbh.Labtop.prototype.getMemory = function() {
  return /** @type{?proto.bsp.kbh.Memory} */ (
    jspb.Message.getWrapperField(this, protos_memory_message_pb.Memory, 5));
};


/**
 * @param {?proto.bsp.kbh.Memory|undefined} value
 * @return {!proto.bsp.kbh.Labtop} returns this
*/
proto.bsp.kbh.Labtop.prototype.setMemory = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearMemory = function() {
  return this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Labtop.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated GPU gpus = 6;
 * @return {!Array<!proto.bsp.kbh.GPU>}
 */
proto.bsp.kbh.Labtop.prototype.getGpusList = function() {
  return /** @type{!Array<!proto.bsp.kbh.GPU>} */ (
    jspb.Message.getRepeatedWrapperField(this, protos_processor_message_pb.GPU, 6));
};


/**
 * @param {!Array<!proto.bsp.kbh.GPU>} value
 * @return {!proto.bsp.kbh.Labtop} returns this
*/
proto.bsp.kbh.Labtop.prototype.setGpusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bsp.kbh.GPU=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp.kbh.GPU}
 */
proto.bsp.kbh.Labtop.prototype.addGpus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bsp.kbh.GPU, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearGpusList = function() {
  return this.setGpusList([]);
};


/**
 * repeated Storage storage = 7;
 * @return {!Array<!proto.bsp.kbh.Storage>}
 */
proto.bsp.kbh.Labtop.prototype.getStorageList = function() {
  return /** @type{!Array<!proto.bsp.kbh.Storage>} */ (
    jspb.Message.getRepeatedWrapperField(this, protos_storage_message_pb.Storage, 7));
};


/**
 * @param {!Array<!proto.bsp.kbh.Storage>} value
 * @return {!proto.bsp.kbh.Labtop} returns this
*/
proto.bsp.kbh.Labtop.prototype.setStorageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.bsp.kbh.Storage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bsp.kbh.Storage}
 */
proto.bsp.kbh.Labtop.prototype.addStorage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.bsp.kbh.Storage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearStorageList = function() {
  return this.setStorageList([]);
};


/**
 * optional Screen screen = 8;
 * @return {?proto.bsp.kbh.Screen}
 */
proto.bsp.kbh.Labtop.prototype.getScreen = function() {
  return /** @type{?proto.bsp.kbh.Screen} */ (
    jspb.Message.getWrapperField(this, protos_screen_message_pb.Screen, 8));
};


/**
 * @param {?proto.bsp.kbh.Screen|undefined} value
 * @return {!proto.bsp.kbh.Labtop} returns this
*/
proto.bsp.kbh.Labtop.prototype.setScreen = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearScreen = function() {
  return this.setScreen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Labtop.prototype.hasScreen = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Keyboard kayboard = 9;
 * @return {?proto.bsp.kbh.Keyboard}
 */
proto.bsp.kbh.Labtop.prototype.getKayboard = function() {
  return /** @type{?proto.bsp.kbh.Keyboard} */ (
    jspb.Message.getWrapperField(this, protos_keyboard_message_pb.Keyboard, 9));
};


/**
 * @param {?proto.bsp.kbh.Keyboard|undefined} value
 * @return {!proto.bsp.kbh.Labtop} returns this
*/
proto.bsp.kbh.Labtop.prototype.setKayboard = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearKayboard = function() {
  return this.setKayboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Labtop.prototype.hasKayboard = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double weight_kg = 10;
 * @return {number}
 */
proto.bsp.kbh.Labtop.prototype.getWeightKg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.setWeightKg = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.bsp.kbh.Labtop.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearWeightKg = function() {
  return jspb.Message.setOneofField(this, 10, proto.bsp.kbh.Labtop.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Labtop.prototype.hasWeightKg = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double weight_lb = 11;
 * @return {number}
 */
proto.bsp.kbh.Labtop.prototype.getWeightLb = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.setWeightLb = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.bsp.kbh.Labtop.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearWeightLb = function() {
  return jspb.Message.setOneofField(this, 11, proto.bsp.kbh.Labtop.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Labtop.prototype.hasWeightLb = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double price_usd = 12;
 * @return {number}
 */
proto.bsp.kbh.Labtop.prototype.getPriceUsd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.setPriceUsd = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double release_year = 13;
 * @return {number}
 */
proto.bsp.kbh.Labtop.prototype.getReleaseYear = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.setReleaseYear = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional Timestamp updated_at = 14;
 * @return {?proto.bsp.kbh.Timestamp}
 */
proto.bsp.kbh.Labtop.prototype.getUpdatedAt = function() {
  return /** @type{?proto.bsp.kbh.Timestamp} */ (
    jspb.Message.getWrapperField(this, protos_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.bsp.kbh.Timestamp|undefined} value
 * @return {!proto.bsp.kbh.Labtop} returns this
*/
proto.bsp.kbh.Labtop.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bsp.kbh.Labtop} returns this
 */
proto.bsp.kbh.Labtop.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bsp.kbh.Labtop.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.bsp.kbh);
