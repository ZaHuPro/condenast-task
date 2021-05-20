"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.API_KEY = exports.API_PREFIX = exports.PORT = exports.ENV = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _logger = _interopRequireDefault(require("../utils/logger"));

_logger["default"].info("ENV :: Registering the env file");

_dotenv["default"].config();

_logger["default"].info("Configs :: Initializes the configs");

var ENV = process.env.NODE_ENV || "development";
exports.ENV = ENV;
var PORT = process.env.PORT || 5000;
exports.PORT = PORT;
var API_PREFIX = process.env.API_PREFIX || "api";
exports.API_PREFIX = API_PREFIX;
var API_KEY = process.env.API_KEY || "";
exports.API_KEY = API_KEY;
var _default = {
  PORT: PORT,
  ENV: ENV,
  API_PREFIX: API_PREFIX
};
exports["default"] = _default;