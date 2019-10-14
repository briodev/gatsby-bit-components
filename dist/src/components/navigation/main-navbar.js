"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _reactBurgerMenu = require("react-burger-menu");

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    /* Individual item */\n    .bm-item {\n      display: inline-block;\n      /* Our sidebar item styling */\n      text-decoration: none;\n      margin-bottom: 10px;\n      color: #d1d1d1;\n      transition: color 0.2s;\n    }\n    /* Change color on hover */\n    .bm-item:hover {\n      color: white;\n    }\n    /* The rest copied directly from react-burger-menu docs */\n    /* Position and sizing of burger button */\n    .bm-burger-button {\n      position: fixed;\n      width: 36px;\n      height: 30px;\n      right: 36px;\n      top: 36px;\n    }\n    /* Color/shape of burger icon bars */\n    .bm-burger-bars {\n      background: #373a47;\n    }\n    /* Position and sizing of clickable cross button */\n    .bm-cross-button {\n      height: 24px;\n      width: 24px;\n    }\n    /* Color/shape of close button cross */\n    .bm-cross {\n      background: #bdc3c7;\n    }\n    /* General sidebar styles */\n    .bm-menu {\n      background: #373a47;\n      padding: 2.5em 1.5em 0;\n      font-size: 1.15em;\n    }\n    /* Morph shape necessary with bubble or elastic */\n    .bm-morph-shape {\n      fill: #373a47;\n    }\n    /* Wrapper for item list */\n    .bm-item-list {\n      color: #b8b7ad;\n    }\n    /* Styling of overlay */\n    .bm-overlay {\n      background: rgba(0, 0, 0, 0.3);\n    }\n    @media(min-width: 720px) {\n      display: none;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  margin-top: 1em;\n  a {\n    color: #888;\n    text-align: center;\n    padding: 1em;\n    text-decoration: none;\n    font-size: 1em;\n    &:hover {\n      color: #333;\n    }\n  }\n  @media(max-width: 721px) {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1em 1em 0 1em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: #fafafa;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1101;\n  top: 0;\n  width: 100vw;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default() {
  var _useState = (0, _react.useState)({
    menuOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      menuState = _useState2[0],
      setMenuOpen = _useState2[1];

  var closeMenu = function closeMenu() {
    setMenuOpen({
      menuOpen: false
    });
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(TopNav, {
    className: "sticky-top"
  }, _react["default"].createElement(NavItems, null, _react["default"].createElement(_gatsby.Link, {
    to: "/"
  }, "Home"), _react["default"].createElement(_gatsby.Link, {
    to: "/articles"
  }, "Articles"), _react["default"].createElement("a", {
    href: "#"
  }, "About"), _react["default"].createElement("a", {
    href: "#"
  }, "Products")), _react["default"].createElement(SideMenu, null, _react["default"].createElement(_reactBurgerMenu.slide, {
    isOpen: menuState.menuOpen
  }, _react["default"].createElement(_gatsby.Link, {
    className: "menu-item",
    to: "/",
    onClick: function onClick() {
      return closeMenu();
    }
  }, "Home"), _react["default"].createElement(_gatsby.Link, {
    className: "menu-item",
    to: "/articles",
    onClick: function onClick() {
      return closeMenu();
    }
  }, "Articles"), _react["default"].createElement(_gatsby.Link, {
    className: "menu-item",
    to: "/centered-div",
    onClick: function onClick() {
      return closeMenu();
    }
  }, "Centered Div"), _react["default"].createElement(_gatsby.Link, {
    className: "menu-item",
    to: "/form-sample",
    onClick: function onClick() {
      return closeMenu();
    }
  }, "Form Sample"), _react["default"].createElement(_gatsby.Link, {
    className: "menu-item",
    to: "/reactstrap-form",
    onClick: function onClick() {
      return closeMenu();
    }
  }, "Reactstrap Form"), _react["default"].createElement(_gatsby.Link, {
    className: "menu-item",
    to: "/react-final-form",
    onClick: function onClick() {
      return closeMenu();
    }
  }, "React Final Form")))));
};

exports["default"] = _default;

var TopNav = _styled["default"].div(_templateObject());

var Logo = _styled["default"].div(_templateObject2());

var NavItems = _styled["default"].div(_templateObject3());

var SideMenu = _styled["default"].div(_templateObject4());

//# sourceMappingURL=main-navbar.js.map