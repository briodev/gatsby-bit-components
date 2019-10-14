"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _themeUi = require("theme-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return (0, _themeUi.jsx)("div", null, (0, _themeUi.jsx)(_themeUi.Styled.h1, _extends({}, props, {
    sx: {
      color: 'highlight',
      fontSize: 5
    }
  }), "A Test Component"), (0, _themeUi.jsx)(_themeUi.Styled.p, _extends({}, props, {
    sx: {
      color: 'primary',
      textDecoration: 'underline'
    }
  }), "Some text in a styled paragraph"));
};

exports["default"] = _default;

//# sourceMappingURL=index.js.map