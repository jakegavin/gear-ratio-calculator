var React = require('react');
var GearActions = require('../actions/GearActions');

var CASSETTE_OPTIONS = [
  { name: 'Cool Cassete', value: [10, 8, 6, 4] },
  { name: 'Odd Cassete', value: [11, 9, 7, 5] }
];

var CassetteSelector = React.createClass({
  getInitialState: function() {
    return {
      value: null
    };
  },

  render: function() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleSelectChanged}>
          <option value={null}>Select a cassette</option>
          {this.renderCassetteOptions()}
        </select>
      </div>
    );
  },

  renderCassetteOptions: function() {
    return CASSETTE_OPTIONS.map(function(cassette) {
      var valueString = cassette.value.join('-');

      return (
        <option
          key={cassette.name + valueString}
          value={valueString}
        >
          {cassette.name} {valueString}
        </option>
      );
    });
  },

  handleSelectChanged: function(ev) {
    var cassetteArray = ev.target.value.split('-');
    GearActions.addCassette(cassetteArray);
    this.setState({value: ev.target.value});
  }
});

module.exports = CassetteSelector;
