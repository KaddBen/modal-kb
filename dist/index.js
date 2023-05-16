'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Modal = ({
  open,
  onClose,
  fadeDuration,
  showSpinner,
  escapeClose,
  clickToClose,
  showClose,
  closeText,
  closeClass,
  isLoading
}) => {
  if (fadeDuration == null) fadeDuration = null;
  if (showSpinner == null) showSpinner = true;
  if (escapeClose == null) escapeClose = true;
  if (clickToClose == null) clickToClose = true;
  if (showClose == null) showClose = true;
  if (closeText == null) closeText = "Close";
  if (showClose == null) showClose = true;
  if (closeClass == null) closeClass = "";
  const [className1, setClassName1] = React.useState("hidden");
  const [className2, setClassName2] = React.useState("hidden");
  console.log(showSpinner);
  React.useEffect(() => {
    isLoading === true ? setClassName2("loader") : setClassName2("hidden");
    isLoading === true && showSpinner === true ? setClassName1("hidden") : setClassName1("visible");
  });
  window.addEventListener("keydown", e => {
    // eslint-disable-next-line no-unused-expressions
    if (open && escapeClose === true && e.keyCode === 27) onClose();
  });
  if (!open) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    // eslint-disable-next-line no-unused-expressions
    className: showClose === true ? "" : "hidden",
    onClick: onClose
  }, "X"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: showSpinner === true ? className2 : "hidden"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: className1
  }, "Employee Sucessfully created !"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: closeClass
  }, closeText));
};

exports.Modal = Modal;
