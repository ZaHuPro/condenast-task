"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsOfEverything = exports.newsOfTopHeadlines = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var _configs = require("./configs");

var _newsapi = _interopRequireDefault(require("newsapi"));

var newsAPI = new _newsapi["default"](_configs.API_KEY);

var newsOfTopHeadlines = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(page, pageSize) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return newsAPI.v2.topHeadlines({
              language: 'en',
              country: 'gb'
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            _logger["default"].error(_context.t0);

            return _context.abrupt("return", {
              status: "error",
              err: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function newsOfTopHeadlines(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.newsOfTopHeadlines = newsOfTopHeadlines;

var newsOfEverything = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(page, pageSize, query) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return newsAPI.v2.everything({
              q: query,
              language: 'en',
              pageSize: pageSize,
              page: page
            });

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

            _logger["default"].error(_context2.t0);

            return _context2.abrupt("return", {
              status: "error",
              err: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function newsOfEverything(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.newsOfEverything = newsOfEverything;