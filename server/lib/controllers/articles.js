"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticlesController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var _responder = require("../utils/responder");

var _service = require("../providers/service");

var getArticlesController = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var query, pageSize, page, articlesData, _articlesData, status, articles, totalResults;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = req.query.query;
            pageSize = Number(req.query.pageSize || 12);
            page = Number(req.query.page || 1);

            _logger["default"].debug("getArticlesController :: %o", {
              page: page,
              pageSize: pageSize,
              query: query
            });

            articlesData = {};

            if (!query) {
              _context.next = 12;
              break;
            }

            _logger["default"].debug("Calling :: newsOfEverything...");

            _context.next = 9;
            return (0, _service.newsOfEverything)(page, pageSize, query);

          case 9:
            articlesData = _context.sent;
            _context.next = 16;
            break;

          case 12:
            _logger["default"].debug("Calling :: newsOfTopHeadlines...");

            _context.next = 15;
            return (0, _service.newsOfTopHeadlines)(page, pageSize);

          case 15:
            articlesData = _context.sent;

          case 16:
            _articlesData = articlesData, status = _articlesData.status, articles = _articlesData.articles, totalResults = _articlesData.totalResults;

            if (!(!status || status !== "ok")) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", (0, _responder.errorRespond)(res, "Error while fetching the articles", 400));

          case 19:
            return _context.abrupt("return", (0, _responder.successRespond)(res, "Successfully fetched", 202, {
              articles: articles,
              page: {
                pageSize: pageSize,
                page: page,
                totalResults: totalResults,
                totalPage: Math.ceil(totalResults / pageSize)
              }
            }));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getArticlesController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getArticlesController = getArticlesController;