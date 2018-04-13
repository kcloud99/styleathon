"use strict";

var FishTable = function FishTable() {
  return React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      props.fishes.map(function (fish) {
        return React.createElement(FishTableRow, { fish: fish });
      })
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Zpc2hUYWJsZS5qcyJdLCJuYW1lcyI6WyJGaXNoVGFibGUiLCJwcm9wcyIsImZpc2hlcyIsIm1hcCIsImZpc2giLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUNkO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNDQyxZQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUI7QUFBQSxlQUNoQixvQkFBQyxZQUFELElBQWMsTUFBTUMsSUFBcEIsR0FEZ0I7QUFBQSxPQUFqQjtBQUREO0FBREYsR0FEYztBQUFBLENBQWhCOztBQVdBO0FBQ0E7QUFDQUosVUFBVUssU0FBVixHQUFzQjtBQUNwQkgsVUFBUUksTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRFYsQ0FBdEI7O0FBSUE7QUFDQTtBQUNBQyxPQUFPVixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJGaXNoVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRmlzaFRhYmxlID0gKCkgPT4gKFxuICA8dGFibGU+XG4gICAgPHRib2R5PlxuICAgIHtwcm9wcy5maXNoZXMubWFwKGZpc2ggPT5cbiAgICAgIDxGaXNoVGFibGVSb3cgZmlzaD17ZmlzaH0vPlxuICAgICAgKVxuICAgIH1cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuRmlzaFRhYmxlLnByb3BUeXBlcyA9IHtcbiAgZmlzaGVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5GaXNoVGFibGUgPSBGaXNoVGFibGU7XG4iXX0=