var React = require('react');

var GearList = React.createClass({
  propTypes: {
    gears: React.PropTypes.array.isRequired
  },

  render: function() {
    if (this.props.gears.length < 1) {
      return null;
    }

    var gearElements = this.props.gears.map(function(gear) {
      return (
        <li key={gear.id}>{gear.gearType}: {gear.value}</li>
      );
    });

    return <ul>{gearElements}</ul>;
  }
});

module.exports = GearList;
