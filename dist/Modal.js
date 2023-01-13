"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    title,
    text,
    btnText,
    onClickFunction
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-window"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn",
    onclick: onClickFunction
  }, btnText)));
};
exports.Modal = Modal;