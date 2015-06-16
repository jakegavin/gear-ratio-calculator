var React = require('react');
var GearTextInput = require('./GearTextInput.react');

var GearTable = React.createClass({
  propTypes: {
    chainrings: React.PropTypes.array.isRequired,
    sprockets: React.PropTypes.array.isRequired
  },

  render: function() {
    var chainringRow = this.props.chainrings.map(function(chainring) {
      return <td key={chainring.id}>{chainring.value}</td>;
    });

    return (
      <table>
        <tbody>
          <tr>
            <td></td>
            {chainringRow}
            <td>
              <GearTextInput
                gearType='chainring'
                placeholder='Chainring'
              />
            </td>
          </tr>
          {this.renderSprocketRows()}
          <tr>
            <td>
              <GearTextInput
                gearType='sprocket'
                placeholder='Sprocket'
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  },

  renderGearRatioColumns: function(sprocket) {
    var valueColumns = this.props.chainrings.map(function(chainring) {
      return <td key={sprocket.id + chainring.id}>{this._calculateRatio(chainring.value, sprocket.value)}</td>;
    }, this);

    return valueColumns;
  },

  renderSprocketRows: function() {
    var sprocketRows = this.props.sprockets.map(function(sprocket, index) {
      return (
        <tr key={sprocket.id}>
          <td>{sprocket.value}</td>
          {this.renderGearRatioColumns(sprocket)}
        </tr>
      );
    }, this);

    return sprocketRows;
  },

  _calculateRatio: function(chainringValue, sprocketValue) {
    var ratio = chainringValue / sprocketValue;
    return Math.round(ratio * 100) / 100;
  }
});

module.exports = GearTable;
