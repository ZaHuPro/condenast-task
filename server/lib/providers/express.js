"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _logger = _interopRequireWildcard(require("../utils/logger"));

var _Api = _interopRequireDefault(require("../router/Api"));

var _configs = require("./configs");

var _exception = require("../utils/exception");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default() {
  _logger["default"].info("Express :: Initializes the express server");

  var app = (0, _express["default"])();

  _logger["default"].info("Middleware :: Booting the middleware...");

  app.use((0, _cors["default"])()); // Enables the request body parser

  app.use(_express["default"].json()); // for parsing application/json

  app.use(_express["default"].urlencoded({
    extended: true
  })); // for parsing application/x-www-form-urlencoded

  app.use(_logger.morganMiddleware);

  _logger["default"].info("Routes :: Mounting API Routes...");

  app.use("/".concat(_configs.API_PREFIX), _Api["default"]);

  _logger["default"].info("Exception :: Registering Exception/Error Handlers...");

  app.use(_exception.ignoreFavicon);
  app.use(_exception.errorHandler);
  app = (0, _exception.notFoundHandler)(app); // listens for connections on the specified ports

  app.listen(_configs.PORT, function (_error) {
    if (_error) {
      return _logger["default"].error(_error);
    }

    return _logger["default"].info("Listening :: Server is running @ ".concat(_configs.PORT));
  });
  return app;
};

exports["default"] = _default;