// source: protos/keyboard_message.proto
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

goog.exportSymbol('proto.bsp.kbh.Keyboard', null, global);
goog.exportSymbol('proto.bsp.kbh.Keyboard.Layout', null, global);
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
proto.bsp.kbh.Keyboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bsp.kbh.Keyboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bsp.kbh.Keyboard.displayName = 'proto.bsp.kbh.Keyboard';
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
proto.bsp.kbh.Keyboard.prototype.toObject = function(opt_includeInstance) {
  return proto.bsp.kbh.Keyboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bsp.kbh.Keyboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp.kbh.Keyboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    layout: jspb.Message.getFieldWithDefault(msg, 1, 0),
    backlit: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.bsp.kbh.Keyboard}
 */
proto.bsp.kbh.Keyboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bsp.kbh.Keyboard;
  return proto.bsp.kbh.Keyboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bsp.kbh.Keyboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bsp.kbh.Keyboard}
 */
proto.bsp.kbh.Keyboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bsp.kbh.Keyboard.Layout} */ (reader.readEnum());
      msg.setLayout(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBacklit(value);
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
proto.bsp.kbh.Keyboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bsp.kbh.Keyboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bsp.kbh.Keyboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bsp.kbh.Keyboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLayout();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBacklit();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bsp.kbh.Keyboard.Layout = {
  UNKNOWN: 0,
  QWERTY: 1,
  QWERTZ: 2,
  AZERTY: 3
};

/**
 * optional Layout layout = 1;
 * @return {!proto.bsp.kbh.Keyboard.Layout}
 */
proto.bsp.kbh.Keyboard.prototype.getLayout = function() {
  return /** @type {!proto.bsp.kbh.Keyboard.Layout} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bsp.kbh.Keyboard.Layout} value
 * @return {!proto.bsp.kbh.Keyboard} returns this
 */
proto.bsp.kbh.Keyboard.prototype.setLayout = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool backlit = 2;
 * @return {boolean}
 */
proto.bsp.kbh.Keyboard.prototype.getBacklit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bsp.kbh.Keyboard} returns this
 */
proto.bsp.kbh.Keyboard.prototype.setBacklit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.bsp.kbh);
