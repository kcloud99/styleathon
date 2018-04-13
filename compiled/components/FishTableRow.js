"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FishTableRow = function (_React$Component) {
  _inherits(FishTableRow, _React$Component);

  function FishTableRow() {
    _classCallCheck(this, FishTableRow);

    var _this = _possibleConstructorReturn(this, (FishTableRow.__proto__ || Object.getPrototypeOf(FishTableRow)).call(this));

    _this.state = {
      showDescription: false
    };
    return _this;
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com


  _createClass(FishTableRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "tr",
        { onClick: function onClick() {
            return _this2.setState({ showDescription: !_this2.state.showDescription });
          } },
        React.createElement(
          "td",
          { className: "fish-name" },
          props.name
        ),
        React.createElement(
          "td",
          null,
          React.createElement("img", { src: "{props.image}" })
        ),
        this.state.showDescription ? React.createElement(
          "td",
          { className: "fish-description" },
          props.description
        ) : null
      );
    }
  }]);

  return FishTableRow;
}(React.Component);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Zpc2hUYWJsZVJvdy5qcyJdLCJuYW1lcyI6WyJGaXNoVGFibGVSb3ciLCJzdGF0ZSIsInNob3dEZXNjcmlwdGlvbiIsInNldFN0YXRlIiwicHJvcHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImZpc2giLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQjtBQUROLEtBQWI7QUFGWTtBQUtiOztBQUVEOzs7Ozs2QkFDUztBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUksU0FBUztBQUFBLG1CQUFNLE9BQUtDLFFBQUwsQ0FBYyxFQUFDRCxpQkFBaUIsQ0FBQyxPQUFLRCxLQUFMLENBQVdDLGVBQTlCLEVBQWQsQ0FBTjtBQUFBLFdBQWI7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLFdBQWQ7QUFBMkJFLGdCQUFNQztBQUFqQyxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsdUNBQUssS0FBSSxlQUFUO0FBREYsU0FGRjtBQUtHLGFBQUtKLEtBQUwsQ0FBV0MsZUFBWCxHQUE2QjtBQUFBO0FBQUEsWUFBSSxXQUFVLGtCQUFkO0FBQWtDRSxnQkFBTUU7QUFBeEMsU0FBN0IsR0FBeUY7QUFMNUYsT0FERjtBQVNEOzs7O0VBbkJ3QkMsTUFBTUMsUzs7QUFzQmpDO0FBQ0E7OztBQUNBUixhQUFhUyxTQUFiLEdBQXlCO0FBQ3ZCQyxRQUFNSCxNQUFNSSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETixDQUF6Qjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9kLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6IkZpc2hUYWJsZVJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpc2hUYWJsZVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dEZXNjcmlwdGlvbjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLy8gQ3VycmVudGx5LCB0aGUgaW1hZ2UgYmVpbmcgZGlzcGxheWVkIGlzIGhhcmRjb2RlZCBmcm9tIHRpbnl1cmwuY29tXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dEZXNjcmlwdGlvbjogIXRoaXMuc3RhdGUuc2hvd0Rlc2NyaXB0aW9ufSl9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmlzaC1uYW1lXCI+e3Byb3BzLm5hbWV9PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbWcgc3JjPVwie3Byb3BzLmltYWdlfVwiIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dEZXNjcmlwdGlvbiA/IDx0ZCBjbGFzc05hbWU9XCJmaXNoLWRlc2NyaXB0aW9uXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvdGQ+IDogbnVsbH1cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9XG59XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbkZpc2hUYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIGZpc2g6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5GaXNoVGFibGVSb3cgPSBGaXNoVGFibGVSb3c7XG4iXX0=