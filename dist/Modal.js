"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "modal-container"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "modal-window"
}, /*#__PURE__*/_react.default.createElement("h2", null, props.title), /*#__PURE__*/_react.default.createElement("p", null, props.text), /*#__PURE__*/_react.default.createElement("button", {
  className: "modal-btn",
  "data-id": props.id,
  type: props.type,
  name: props.name,
  value: props.value,
  disabled: props.disabled,
  onclick: props.handleClick
}, props.btnText)));
var _default = Modal;
exports.default = _default;