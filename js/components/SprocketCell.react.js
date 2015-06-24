var React = require('react');
var GearActions = require('../actions/GearActions');
var GearTextInput = require('./GearTextInput.react');

var SprocketCell = React.createClass({
  propTypes: {
    sprocket: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      editing: false
    };
  },

  render: function() {
    var cellContents;

    if (this.state.editing) {
      cellContents = (
        <span>
          <GearTextInput
            editing={true}
            gearType={this.props.sprocket.gearType}
            value={this.props.sprocket.value}
            onSave={this.handleGearUpdated}
          />
          <span onClick={this.handleSprocketDestroyed}> X</span>
        </span>
      );
    } else {
      cellContents = (
        <span>
          {this.props.sprocket.value}
        </span>
      );
    }

    return (
      <td onClick={this.handleEditStateToggled}>
        {cellContents}
      </td>
    );
  },

  handleEditStateToggled: function() {
    this.setState({editing: !this.state.editing});
  },

  handleGearUpdated: function(gearHash) {
    // TODO Cleanup this hash manipulation
    var newHash = gearHash;
    newHash.id = this.props.sprocket.id;

    GearActions.updateValue(gearHash);
    this.setState({editing: false});
  },

  handleSprocketDestroyed: function() {
    GearActions.destroy(this.props.sprocket.id);
  }
});

module.exports = SprocketCell;
