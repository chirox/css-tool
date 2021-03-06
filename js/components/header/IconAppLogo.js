"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconAppLogo = function IconAppLogo(_ref) {
  var className = _ref.className,
      title = _ref.title;

  return _react2.default.createElement(
    "span",
    {
      className: className,
      title: title
    },
    _react2.default.createElement(
      "svg",
      { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "2",
        "stroke-width": "2"
      },
      _react2.default.createElement(
        "title",
        null,
        title
      ),
      _react2.default.createElement("rect", {
        ry: "1.8825414",
        rx: "194.14471",
        y: "1.434558",
        x: "19.176462",
        height: "12.460618",
        width: "10.85316",
        fill: "#8ecc2d",
        stroke: "#8ecc2d"
      }),
      _react2.default.createElement("rect", {
        ry: "1.87537",
        rx: "204.478",
        y: "16.639841",
        x: "8.8410215",
        height: "13.752699",
        width: "18.307165",
        fill: "#232f3b",
        stroke: "#232f3b"
      }),
      _react2.default.createElement("rect", {
        ry: "1.87537",
        rx: "204.478",
        y: "3.4229634",
        x: "2.5897937",
        height: "10.894996",
        width: "10.001963",
        fill: "#a487d4",
        stroke: "#a487d4"
      })
    )
  );
};

IconAppLogo.propTypes = {
  className: _react.PropTypes.string,
  title: _react.PropTypes.string
};

exports.default = IconAppLogo;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\header\IconAppLogo.js.map