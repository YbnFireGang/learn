"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _log4js = require("log4js");

var _path = require("path");

//日志配置
(0, _log4js.configure)({
  appenders: {
    ruleFile: {
      type: 'dateFile',
      filename: (0, _path.join)(__dirname, '../log/server-'),
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 10 * 1000 * 1000,
      numBackups: 3,
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {
      appenders: ['ruleFile'],
      level: 'error'
    }
  }
});

var errorHandler = function errorHandler(app) {
  app.use(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(ctx, next) {
      var status;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              status = ctx.response.status;

              if (status >= 400) {
                ctx.body = 'page not found';
                (0, _log4js.getLogger)('ruleFile').error(ctx.request);
              }

              _context.next = 4;
              return next();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = errorHandler;
exports.default = _default;