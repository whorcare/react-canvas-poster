"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CanvasPoster = void 0;

require("babel-polyfill");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var QRcode = require('qrcodejs2');

var CanvasPoster = /*#__PURE__*/function (_Component) {
  _inherits(CanvasPoster, _Component);

  function CanvasPoster(props) {
    var _this;

    _classCallCheck(this, CanvasPoster);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasPoster).call(this, props));
    _this.state = {
      ctx: '',
      debug: false,
      drawData: props.drawData
    };
    return _this;
  }

  _createClass(CanvasPoster, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initCanvas();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "canvas-poster"
      }, _react["default"].createElement("div", {
        ref: "canvasCodeDom",
        style: {
          display: this.state.debug ? 'block' : 'none'
        }
      }), _react["default"].createElement("canvas", {
        className: "canvas-poster-hidca",
        ref: "canvas",
        style: {
          display: this.state.debug ? 'block' : 'none'
        }
      }));
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var _this2 = this;

      if (!this.props.drawData.width || !this.props.drawData.height || this.props.drawData.views.length === 0) {
        return;
      }

      this.refs.canvas.width = this.props.drawData.width;
      this.refs.canvas.height = this.props.drawData.height;
      this.setState(function (prevState, props) {
        return {
          debug: props.drawData.debug || false,
          ctx: _this2.refs.canvas.getContext('2d')
        };
      }, function () {
        _this2.drawArr();
      });
    }
  }, {
    key: "drawArr",
    value: function () {
      var _drawArr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.props.drawData.backgroundColor) {
                  this.state.ctx.save();
                  this.state.ctx.fillStyle = this.props.drawData.backgroundColor;
                  this.state.ctx.fillRect(0, 0, this.props.drawData.width, this.props.drawData.height);
                  this.state.ctx.restore();
                }

                i = 0;

              case 2:
                if (!(i < this.props.drawData.views.length)) {
                  _context.next = 12;
                  break;
                }

                if (!(this.props.drawData.views[i].type === 'image')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return this.drawImg(this.props.drawData.views[i]);

              case 6:
                _context.next = 9;
                break;

              case 8:
                if (this.props.drawData.views[i].type === 'text') {
                  this.drawText(this.props.drawData.views[i]);
                } else if (this.props.drawData.views[i].type === 'rect') {
                  this.drawBlock(this.props.drawData.views[i]);
                } else if (this.props.drawData.views[i].type === 'line') {
                  this.drawLine(this.props.drawData.views[i]);
                } else if (this.props.drawData.views[i].type === 'qcode') {
                  this.drawQcode(this.props.drawData.views[i]);
                }

              case 9:
                i += 1;
                _context.next = 2;
                break;

              case 12:
                this.props.success(this.refs.canvas.toDataURL('image/jpeg'));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function drawArr() {
        return _drawArr.apply(this, arguments);
      }

      return drawArr;
    }() // drawImg

  }, {
    key: "drawImg",
    value: function drawImg(data) {
      var _this3 = this;

      return new Promise(function (resolve) {
        var url = data.url,
            _data$top = data.top,
            top = _data$top === void 0 ? 0 : _data$top,
            _data$left = data.left,
            left = _data$left === void 0 ? 0 : _data$left,
            _data$width = data.width,
            width = _data$width === void 0 ? 0 : _data$width,
            _data$height = data.height,
            height = _data$height === void 0 ? 0 : _data$height,
            _data$borderRadius = data.borderRadius,
            borderRadius = _data$borderRadius === void 0 ? 0 : _data$borderRadius,
            _data$borderWidth = data.borderWidth,
            borderWidth = _data$borderWidth === void 0 ? 0 : _data$borderWidth,
            _data$borderColor = data.borderColor,
            borderColor = _data$borderColor === void 0 ? 'rgba(255,255,255,0)' : _data$borderColor;

        _this3.state.ctx.save();

        var img = new Image();
        img.setAttribute('crossorigin', 'anonymous');
        img.src = url;

        img.onload = function () {
          if (borderRadius > 0) {
            _this3.drawRadiusRect(left, top, width, height, borderRadius, borderWidth, borderColor);

            _this3.state.ctx.clip();

            _this3.state.ctx.drawImage(img, left, top, width, height);
          } else {
            _this3.state.ctx.drawImage(img, left, top, width, height);
          }

          _this3.state.ctx.restore();

          setTimeout(function () {
            resolve();
          }, 100);
        };
      });
    } // drawRadiusRect

  }, {
    key: "drawRadiusRect",
    value: function drawRadiusRect(x, y, w, h, r, borderWidth, borderColor) {
      var br = r / 2;
      this.state.ctx.beginPath();

      if (borderWidth > 0) {
        this.state.ctx.lineWidth = borderWidth;
      }

      this.state.ctx.strokeStyle = borderColor;
      this.state.ctx.moveTo(x + br, y); // 移动到左上角的点

      this.state.ctx.lineTo(x + w - br, y);
      this.state.ctx.arc(x + w - br, y + br, br, 2 * Math.PI * (3 / 4), 2 * Math.PI * (4 / 4));
      this.state.ctx.lineTo(x + w, y + h - br);
      this.state.ctx.arc(x + w - br, y + h - br, br, 0, 2 * Math.PI * (1 / 4));
      this.state.ctx.lineTo(x + br, y + h);
      this.state.ctx.arc(x + br, y + h - br, br, 2 * Math.PI * (1 / 4), 2 * Math.PI * (2 / 4));
      this.state.ctx.lineTo(x, y + br);
      this.state.ctx.arc(x + br, y + br, br, 2 * Math.PI * (2 / 4), 2 * Math.PI * (3 / 4));
      this.state.ctx.closePath();
      this.state.ctx.stroke();
    } // drawText

  }, {
    key: "drawText",
    value: function drawText(_ref) {
      var _this4 = this;

      var _ref$top = _ref.top,
          top = _ref$top === void 0 ? 0 : _ref$top,
          _ref$left = _ref.left,
          left = _ref$left === void 0 ? 0 : _ref$left,
          _ref$fontSize = _ref.fontSize,
          fontSize = _ref$fontSize === void 0 ? 16 : _ref$fontSize,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? '#000' : _ref$color,
          _ref$baseLine = _ref.baseLine,
          baseLine = _ref$baseLine === void 0 ? 'bottom' : _ref$baseLine,
          _ref$textAlign = _ref.textAlign,
          textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
          content = _ref.content,
          _ref$opacity = _ref.opacity,
          opacity = _ref$opacity === void 0 ? 1 : _ref$opacity,
          width = _ref.width,
          _ref$lineNum = _ref.lineNum,
          lineNum = _ref$lineNum === void 0 ? 1 : _ref$lineNum,
          _ref$lineHeight = _ref.lineHeight,
          lineHeight = _ref$lineHeight === void 0 ? 0 : _ref$lineHeight,
          _ref$fontWeight = _ref.fontWeight,
          fontWeight = _ref$fontWeight === void 0 ? 'normal' : _ref$fontWeight,
          _ref$fontStyle = _ref.fontStyle,
          fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
          _ref$fontFamily = _ref.fontFamily,
          fontFamily = _ref$fontFamily === void 0 ? 'Microsoft YaHei' : _ref$fontFamily;
      this.state.ctx.save();
      this.state.ctx.beginPath();
      this.state.ctx.font = "normal ".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily);
      this.state.ctx.globalAlpha = opacity;
      this.state.ctx.textAlign = textAlign;
      this.state.ctx.textBaseline = baseLine;
      this.state.ctx.fillStyle = color;
      var textWidth = this.state.ctx.measureText(content).width;
      var textArr = [];

      if (textWidth > width) {
        var fillText = '';
        var line = 1;

        for (var i = 0; i <= content.length - 1; i += 1) {
          // 将文字转为数组
          fillText += content[i];

          if (this.state.ctx.measureText(fillText).width >= width) {
            if (line === lineNum) {
              if (i !== content.length - 1) {
                fillText = "".concat(fillText.substring(0, fillText.length - 1), "...");
              }
            }

            if (line <= lineNum) {
              textArr.push(fillText);
            }

            fillText = '';
            line += 1;
          } else if (line <= lineNum) {
            if (i === content.length - 1) {
              textArr.push(fillText);
            }
          }
        }

        textWidth = width;
      } else {
        textArr.push(content);
      }

      textArr.forEach(function (item, index) {
        _this4.state.ctx.fillText(item, left, top + (lineHeight || fontSize) * index);
      });
      this.state.ctx.restore();
    } // drawLine

  }, {
    key: "drawLine",
    value: function drawLine(_ref2) {
      var startX = _ref2.startX,
          startY = _ref2.startY,
          endX = _ref2.endX,
          endY = _ref2.endY,
          _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? '#000' : _ref2$color,
          _ref2$width = _ref2.width,
          width = _ref2$width === void 0 ? 1 : _ref2$width,
          _ref2$lineCap = _ref2.lineCap,
          lineCap = _ref2$lineCap === void 0 ? 'butt' : _ref2$lineCap;
      this.state.ctx.save();
      this.state.ctx.beginPath();
      this.state.ctx.lineCap = lineCap;
      this.state.ctx.strokeStyle = color;
      this.state.ctx.lineWidth = width;
      this.state.ctx.moveTo(startX, startY);
      this.state.ctx.lineTo(endX, endY);
      this.state.ctx.stroke(); // 进行绘制

      this.state.ctx.closePath();
      this.state.ctx.restore();
    }
  }, {
    key: "drawBlock",
    value: function drawBlock(_ref3) {
      var text = _ref3.text,
          _ref3$width = _ref3.width,
          width = _ref3$width === void 0 ? 0 : _ref3$width,
          height = _ref3.height,
          x = _ref3.x,
          y = _ref3.y,
          _ref3$paddingLeft = _ref3.paddingLeft,
          paddingLeft = _ref3$paddingLeft === void 0 ? 0 : _ref3$paddingLeft,
          _ref3$paddingRight = _ref3.paddingRight,
          paddingRight = _ref3$paddingRight === void 0 ? 0 : _ref3$paddingRight,
          borderWidth = _ref3.borderWidth,
          backgroundColor = _ref3.backgroundColor,
          borderColor = _ref3.borderColor,
          _ref3$borderRadius = _ref3.borderRadius,
          borderRadius = _ref3$borderRadius === void 0 ? 0 : _ref3$borderRadius,
          _ref3$opacity = _ref3.opacity,
          opacity = _ref3$opacity === void 0 ? 1 : _ref3$opacity;
      // 判断是否块内有文字
      var blockWidth = 0; // 块的宽度

      var textX = 0;
      var textY = 0;

      if (typeof text !== 'undefined') {
        // 如果有文字并且块的宽度小于文字宽度，块的宽度为 文字的宽度 + 内边距
        var textWidth = this.getTextWidth(typeof text.content === 'string' ? text : text.content);
        blockWidth = textWidth > width ? textWidth : width;
        blockWidth += paddingLeft + paddingLeft; // eslint-disable-next-line

        var _text$textAlign = text.textAlign,
            textAlign = _text$textAlign === void 0 ? 'left' : _text$textAlign,
            textCon = text.text;
        textY = height / 2 + y; // 文字的y轴坐标在块中线

        if (textAlign === 'left') {
          // 如果是右对齐，那x轴在块的最左边
          textX = x + paddingLeft;
        } else if (textAlign === 'center') {
          textX = blockWidth / 2 + x;
        } else {
          textX = x + blockWidth - paddingRight;
        }
      } else {
        blockWidth = width;
      }

      if (backgroundColor) {
        // 画面
        this.state.ctx.save();
        this.state.ctx.globalAlpha = opacity;
        this.state.ctx.fillStyle = backgroundColor;

        if (borderRadius > 0) {
          // 画圆角矩形
          this.drawRadiusRect(x, y, blockWidth, height, borderRadius);
          this.state.ctx.fill();
        } else {
          this.state.ctx.fillRect(x, y, blockWidth, height);
        }

        this.state.ctx.restore();
      }

      if (borderWidth) {
        // 画线
        this.state.ctx.save();
        this.state.ctx.globalAlpha = opacity;
        this.state.ctx.fillStyle = borderColor;
        this.state.ctx.lineWidth = borderWidth;

        if (borderRadius > 0) {
          // 画圆角矩形边框
          this.drawRadiusRect(x, y, blockWidth, height, borderRadius);
          this.state.ctx.stroke();
        } else {
          this.state.ctx.strokeRect(x, y, blockWidth, height);
        }

        this.state.ctx.restore();
      }

      if (text) {
        this.drawText(Object.assign(text, {
          x: textX,
          y: textY
        }));
      }
    } // 绘制二维码

  }, {
    key: "drawQcode",
    value: function drawQcode(_ref4) {
      var _ref4$text = _ref4.text,
          text = _ref4$text === void 0 ? '' : _ref4$text,
          _ref4$width = _ref4.width,
          width = _ref4$width === void 0 ? 200 : _ref4$width,
          _ref4$height = _ref4.height,
          height = _ref4$height === void 0 ? 200 : _ref4$height,
          _ref4$top = _ref4.top,
          top = _ref4$top === void 0 ? 0 : _ref4$top,
          _ref4$left = _ref4.left,
          left = _ref4$left === void 0 ? 0 : _ref4$left,
          _ref4$background = _ref4.background,
          background = _ref4$background === void 0 ? '#f0f' : _ref4$background,
          _ref4$foreground = _ref4.foreground,
          foreground = _ref4$foreground === void 0 ? '#ff0' : _ref4$foreground,
          _ref4$padding = _ref4.padding,
          padding = _ref4$padding === void 0 ? 5 : _ref4$padding;

      if (text === '') {
        console.warn('您设置的二维码 text 字段内容不能为空'); // eslint-disable-line
      } else {
        this.refs.canvasCodeDom.innerHTML = ''; // 重置

        if (padding !== 0) {
          // 如果没有边距
          this.drawBlock({
            x: left - padding,
            y: top - padding,
            width: width + padding * 2,
            height: height + padding * 2,
            backgroundColor: '#fff'
          });
        }
        /* eslint-disable no-new */


        new QRcode(this.refs.canvasCodeDom, {
          width: width,
          height: height,
          // 高度
          text: text,
          // 二维码内容
          image: '',
          correctLevel: QRcode.CorrectLevel.L,
          background: background,
          foreground: foreground
        });
        this.state.ctx.drawImage(this.refs.canvasCodeDom.querySelector('canvas'), left, top, width, height);
      }
    }
    /**
     * 计算文本长度
     * @param {Array|Object}} text 数组 或者 对象
     */

  }, {
    key: "getTextWidth",
    value: function getTextWidth(text) {
      var _this5 = this;

      var texts = [];

      if (Object.prototype.toString.call(text) === '[object Object]') {
        texts.push(text);
      } else {
        texts = text;
      }

      var width = 0;
      texts.forEach(function (_ref5) {
        var fontSize = _ref5.fontSize,
            text = _ref5.text,
            _ref5$marginLeft = _ref5.marginLeft,
            marginLeft = _ref5$marginLeft === void 0 ? 0 : _ref5$marginLeft,
            _ref5$marginRight = _ref5.marginRight,
            marginRight = _ref5$marginRight === void 0 ? 0 : _ref5$marginRight;
        _this5.state.ctx.font = "".concat(fontSize);
        width += _this5.state.ctx.measureText(text).width + marginLeft + marginRight;
      });
      return width;
    }
  }]);

  return CanvasPoster;
}(_react.Component);

exports.CanvasPoster = CanvasPoster;
CanvasPoster.propTypes = {
  drawData: _propTypes["default"].object
}; // 默认值

CanvasPoster.defaultProps = {
  drawData: {}
};
var _default = CanvasPoster;
exports["default"] = _default;