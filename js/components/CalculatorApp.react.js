var React = require('react');
var GearActions = require('../actions/GearActions');
var GearList = require('./GearList.react');
var GearStore = require('../stores/GearStore');
var GearTextInput = require('./GearTextInput.react');

var CalculatorApp = React.createClass({
  getInitialState: function() {
    return {
     gears: GearStore.getState().gears
    };
  },

  componentDidMount: function() {
    GearStore.listen(this.handleGearStoreChanged);
  },

  componentDidUnmount: function() {
    GearStore.unlisten(this.handleGearStoreChanged);
  },

  render: function() {
    return (
      <div>
        <h1>Calculator</h1>
        <GearTextInput
          onSave={this.handleGearCreated}
        />
        <GearList
          gears={this.state.gears}
        />
      </div>
    );
  },

  handleGearCreated: function(value) {
    if (value.trim()) {
      GearActions.createGear(value);
    }
  },

  handleGearStoreChanged: function(state) {
    this.setState(state);
  }
});

module.exports = CalculatorApp;
