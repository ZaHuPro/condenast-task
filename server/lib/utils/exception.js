"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFoundHandler = exports.ignoreFavicon = exports.errorHandler = void 0;

var _logger = _interopRequireDefault(require("./logger"));

var _responder = require("./responder");

var errorHandler = function errorHandler(err, req, res, next) {
  _logger["default"].error(err);

  return (0, _responder.errorRespond)(res, "Unexpected error from server", 500);
}; // prevent favicon from browser


exports.errorHandler = errorHandler;

var ignoreFavicon = function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes("favicon.ico")) {
    //204 No Content
    res.status(204).end();
  }

  next();
};

exports.ignoreFavicon = ignoreFavicon;

var notFoundHandler = function notFoundHandler(_express) {
  _express.all("*", function (req, res) {
    // ip from client header or from express request object
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    _logger["default"].error("Path '".concat(req.originalUrl, "' not found [IP: '").concat(ip, "']!"));

    return (0, _responder.errorRespond)(res, "URL not found", 404);
  });

  return _express;
};

exports.notFoundHandler = notFoundHandler;