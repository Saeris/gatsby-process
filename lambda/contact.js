(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(7);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(0);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(5);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__(8);
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(9);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/wrapNativeSuper"
var wrapNativeSuper_ = __webpack_require__(10);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper_);

// CONCATENATED MODULE: ./email/AWSError.ts








var AWSError_AWSError =
/*#__PURE__*/
function (_Error) {
  inherits_default()(AWSError, _Error);

  createClass_default()(AWSError, [{
    key: "name",
    get: function get() {
      return this.errorType || this.constructor.name;
    }
  }, {
    key: "message",
    get: function get() {
      return this.errorMessage || "";
    }
  }]);

  function AWSError(requestId) {
    var _this;

    classCallCheck_default()(this, AWSError);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(AWSError).call(this));

    defineProperty_default()(assertThisInitialized_default()(_this), "httpStatus", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "errorType", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "errorMessage", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "requestId", void 0);

    _this.requestId = requestId;
    return _this;
  }

  return AWSError;
}(wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: ./email/createTransporter.ts









var createTransporter_CreateTranspoterError =
/*#__PURE__*/
function (_AWSError) {
  inherits_default()(CreateTranspoterError, _AWSError);

  function CreateTranspoterError() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, CreateTranspoterError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(CreateTranspoterError)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "httpStatus", 500);

    defineProperty_default()(assertThisInitialized_default()(_this), "errorType", "Internal Server Error");

    defineProperty_default()(assertThisInitialized_default()(_this), "errorMessage", "Failed to create mail transport");

    return _this;
  }

  return CreateTranspoterError;
}(AWSError_AWSError);

var createTransporter_createTransporter = function createTransporter(requestId) {
  try {
    return external_nodemailer_default.a.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD
      }
    });
  } catch (err) {
    throw new createTransporter_CreateTranspoterError(requestId);
  }
};
// CONCATENATED MODULE: ./email/parseBody.ts








var parseBody_BadRequest =
/*#__PURE__*/
function (_AWSError) {
  inherits_default()(BadRequest, _AWSError);

  function BadRequest() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, BadRequest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(BadRequest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "httpStatus", 400);

    defineProperty_default()(assertThisInitialized_default()(_this), "errorType", "Bad Request");

    defineProperty_default()(assertThisInitialized_default()(_this), "errorMessage", "Request body must be valid JSON");

    return _this;
  }

  return BadRequest;
}(AWSError_AWSError);

var parseBody = function parseBody(_ref) {
  var body = _ref.body,
      requestId = _ref.requestId;

  try {
    return JSON.parse(body);
  } catch (err) {
    throw new parseBody_BadRequest(requestId);
  }
};
// CONCATENATED MODULE: ./email/sendMessage.ts











var sendMessage_MailerError =
/*#__PURE__*/
function (_AWSError) {
  inherits_default()(MailerError, _AWSError);

  function MailerError() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, MailerError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(MailerError)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "httpStatus", 500);

    defineProperty_default()(assertThisInitialized_default()(_this), "errorType", "Internal Server Error");

    defineProperty_default()(assertThisInitialized_default()(_this), "errorMessage", "Failed to send email");

    return _this;
  }

  return MailerError;
}(AWSError_AWSError);

var contactAddress = "hey@yourwebsite.com";
var sendMessage =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref2) {
    var transporter, from, subject, message, requestId, result;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            transporter = _ref2.transporter, from = _ref2.from, subject = _ref2.subject, message = _ref2.message, requestId = _ref2.requestId;
            _context.prev = 1;
            _context.next = 4;
            return transporter.sendMail({
              from: from,
              to: [contactAddress],
              subject: subject,
              html: message
            });

          case 4:
            result = _context.sent;
            console.log("Message sent: ".concat(result.messageId)); // eslint-disable-line

            console.log("Preview URL: ".concat(external_nodemailer_default.a.getTestMessageUrl(result))); // eslint-disable-line

            return _context.abrupt("return", {
              statusCode: 200,
              body: "Ok"
            });

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            throw new sendMessage_MailerError(requestId);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function sendMessage(_x) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./email/index.ts



// CONCATENATED MODULE: ./contact.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });



var handler =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(event, context) {
    var _ref2, requestId, _parseBody, from, _parseBody$subject, subject, _parseBody$message, message, transporter;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _ref2 = context || {
              awsRequestId: ""
            }, requestId = _ref2.awsRequestId;
            _parseBody = parseBody({
              body: (event === null || event === void 0 ? void 0 : event.body) || "",
              requestId: requestId
            }), from = _parseBody.from, _parseBody$subject = _parseBody.subject, subject = _parseBody$subject === void 0 ? "[No subject]" : _parseBody$subject, _parseBody$message = _parseBody.message, message = _parseBody$message === void 0 ? "[No message]" : _parseBody$message;
            transporter = createTransporter_createTransporter(requestId);
            _context.next = 6;
            return sendMessage({
              transporter: transporter,
              from: from,
              subject: subject,
              message: message,
              requestId: requestId
            });

          case 6:
            return _context.abrupt("return", _context.sent);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              statusCode: _context.t0.httpStatus,
              body: "".concat(_context.t0.errorType, ": ").concat(_context.t0.errorMessage)
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })
/******/ ])));