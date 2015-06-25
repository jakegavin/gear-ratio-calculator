var React = require('react');
var CassetteSelector = require('./CassetteSelector.react');
var GearActions = require('../actions/GearActions');
var GearStore = require('../stores/GearStore');
var GearTable = require('./GearTable.react');

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
        <GearTable
          chainrings={GearStore.getAllForType('chainring')}
          cogs={GearStore.getAllForType('cog')}
        />
        <CassetteSelector />
      </div>
    );
  },

  handleGearStoreChanged: function(state) {
    this.setState(state);
  }
});

module.exports = CalculatorApp;
