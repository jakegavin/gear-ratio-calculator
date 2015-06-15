var React = require('react');

var GearList = React.createClass({
  propTypes: {
    gears: React.PropTypes.object.isRequired
  },

  render: function() {
    var allGears = this.props.gears;
    var gears = [];

    if (Object.keys(this.props.gears).length < 1) {
      return null;
    }

    for (var key in this.props.gears) {
      gears.push(<li key={key}>{allGears[key].value}</li>);
    }

    return (
      <div>
        <h3>Gears</h3>
        <ul>{gears}</ul>
      </div>
    );
  }
});

module.exports = GearList;
