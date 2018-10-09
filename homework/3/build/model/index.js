"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var query = require('../database/query');

var _require = require('../database/sql'),
    _getFavorite = _require.getFavorite,
    _addFavorite = _require.addFavorite;

var model = {
  page: {
    index: function index(ctx) {
      return ctx.render('index');
    },
    noFound: function noFound(ctx) {
      ctx.status = 404;
      ctx.body = 'file not find';
      return ctx;
    }
  },
  api: {
    getFavorite: function getFavorite(ctx) {
      return query(_getFavorite).then(function (result) {
        ctx.body = {
          code: 1,
          data: result[0].favorite
        };
      });
    },
    addFavorite: function addFavorite(ctx) {
      return query(_addFavorite).then(
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(result) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return query(_getFavorite).then(function (result) {
                    ctx.body = {
                      code: 1,
                      data: result[0].favorite
                    };
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
};
module.exports = model;