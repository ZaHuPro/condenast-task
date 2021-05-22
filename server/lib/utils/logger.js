"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.morganMiddleware = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _winston = require("winston");

var combine = _winston.format.combine,
    colorize = _winston.format.colorize,
    timestamp = _winston.format.timestamp,
    errors = _winston.format.errors,
    printf = _winston.format.printf,
    splat = _winston.format.splat,
    metadata = _winston.format.metadata;
var colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "cyan"
}; // Tell winston that you want to link the colors

(0, _winston.addColors)(colors);
var customFormat = printf(function (_ref) {
  var level = _ref.level,
      message = _ref.message,
      timestamp = _ref.timestamp,
      metadata = _ref.metadata;
  var format = "".concat(timestamp, " | ").concat(level, " | ").concat(message);

  if (metadata) {
    if (metadata.stack) {
      format = "".concat(format, " | ").concat(metadata.stack);
    } else if (metadata instanceof Object && Object.entries(metadata).length > 0) {
      format = "".concat(format, " | ").concat(JSON.stringify(metadata));
    }
  }

  return format;
});
var Logger = (0, _winston.createLogger)({
  level: "debug",
  format: combine( // error stack trace in metadata
  errors({
    stack: true
  }), metadata(), // timestamp to logger
  timestamp(), //string interpolation
  splat(), customFormat, // print with color in console
  colorize({
    all: true
  })),
  transports: [new _winston.transports.Console()]
});
var stream = {
  write: function write(message) {
    return Logger.http(message);
  }
}; // Build the morgan middleware

var morganMiddleware = (0, _morgan["default"])(":method :url :status :res[content-length] - :response-time ms", {
  stream: stream
});
exports.morganMiddleware = morganMiddleware;
var _default = Logger;
exports["default"] = _default;