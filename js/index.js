"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Application = function (_React$Component) {
  _inherits(Application, _React$Component);

  function Application() {
    var _temp, _this, _ret;

    _classCallCheck(this, Application);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      buttonWidth: 200,
      buttonHeight: 50
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // componentDidMount(){
  //   const {state, props} = this;
  //   const style = document.createElement('style');
  //   style.innerHTML =  `
  //     .main {
  //       --button-width: ${state.buttonWidth}px;
  //       --button-height: ${state.buttonHeight}px;
  //     }
  //   `;
  //   this.refs.main.getDOMNode().appendChild(style)
  // };

  Application.prototype.renderStyles = function renderStyles() {
    var state = this.state;
    var props = this.props;

    return React.createElement(
      "style",
      null,
      ".main {\n          --button-width: " + state.buttonWidth + "px; \n          --button-height: " + state.buttonHeight + "px;\n        }"
    );
  };

  Application.prototype.overrideRender = function overrideRender() {
    var _this2 = this;

    var state = this.state;
    var props = this.props;

    return React.createElement(
      "div",
      { className: "main", ref: "main" },
      React.createElement(
        "div",
        null,
        "React: js vars to css"
      ),
      React.createElement(
        "div",
        { className: "slider" },
        React.createElement(
          "label",
          null,
          "height: "
        ),
        React.createElement("input", {
          type: "range",
          id: "height",
          onChange: function onChange(e) {
            return _this2.setState({ buttonHeight: e.target.value });
          },
          min: "30", max: "100",
          value: state.buttonHeight })
      ),
      React.createElement(
        "div",
        { className: "slider" },
        React.createElement(
          "label",
          null,
          "width: "
        ),
        React.createElement("input", {
          type: "range",
          id: "width",
          onChange: function onChange(e) {
            return _this2.setState({ buttonWidth: e.target.value });
          },
          min: "100",
          max: "500",
          value: "10",
          value: state.buttonWidth
        })
      ),
      React.createElement(
        "button",
        null,
        "Baton"
      )
    );
  };

  Application.prototype.render = function render() {
    return React.createElement(
      "component",
      null,
      this.renderStyles(),
      this.overrideRender()
    );
  };

  return Application;
}(React.Component);

/*
 * Render the above component into the div#app
 */

React.render(React.createElement(Application, null), document.getElementById('app'));