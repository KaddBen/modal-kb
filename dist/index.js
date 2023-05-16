'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Modal({
  open,
  onClose,
  showSpinner,
  escapeClose,
  clickToClose,
  showClose,
  closeText,
  closeClass,
  modalClass,
  isLoading
}) {
  //Default options
  if (showSpinner == null) showSpinner = true;
  if (escapeClose == null) escapeClose = true;
  if (clickToClose == null) clickToClose = true;
  if (closeText == null) closeText = "Close";
  if (showClose == null) showClose = true;
  if (closeClass == null) closeClass = "";
  if (modalClass == null) modalClass = "modal";
  const [className1, setClassName1] = React.useState("hidden employee");
  const [className2, setClassName2] = React.useState("hidden");
  const [className3, setClassName3] = React.useState("hidden");
  React.useEffect(() => {
    isLoading === true ? setClassName2("loader") : setClassName2("hidden");
    isLoading === true && showSpinner === true ? setClassName1("hidden employee") : setClassName1("visible employee");
    clickToClose === true ? setClassName3("visible") : setClassName3("hidden");
    isLoading === true && showSpinner === true ? setClassName3("hidden" + closeClass) : setClassName3("visible" + closeClass);
  });
  window.addEventListener("keydown", e => {
    // eslint-disable-next-line no-unused-expressions
    if (open && escapeClose === true && e.keyCode === 27) onClose();
  });
  if (open && document.querySelector(".modal")) {
    window.addEventListener('mouseup', e => {
      // eslint-disable-next-line no-unused-expressions
      if (open && clickToClose === true && e.target !== document.querySelector(".modal") && e.target !== document.querySelector(".employee")) onClose();
    });
  }
  if (!open) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: modalClass
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    // eslint-disable-next-line no-unused-expressions
    className: showClose === true ? "" : "hidden",
    onClick: onClose
  }, "X"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: showSpinner === true ? className2 : "hidden"
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: className1
  }, "Employee Sucessfully created !"), /*#__PURE__*/React__default["default"].createElement("a", {
    className: className3,
    onClick: onClose
  }, closeText));
}

module.exports = Modal;
