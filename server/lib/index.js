"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _logger = _interopRequireDefault(require("./utils/logger"));

var _express = _interopRequireDefault(require("./providers/express"));

_logger["default"].info("Server :: Booting...");

(0, _express["default"])();