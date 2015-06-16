var React = require('react');
var GearActions = require('../actions/GearActions');

var SprocketCell = React.createClass({
  propTypes: {
    sprocket: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <td onClick={this.handleSprocketDestroyed}>
        {this.props.sprocket.value}
      </td>
    );
  },

  handleSprocketDestroyed: function() {
    GearActions.destroy(this.props.sprocket.id);
  }
});

module.exports = SprocketCell;
