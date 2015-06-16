var React = require('react');
var GearTextInput = require('./GearTextInput.react');

var GearTable = React.createClass({
  propTypes: {
    chainrings: React.PropTypes.array.isRequired,
    cogs: React.PropTypes.array.isRequired
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
          {this.renderCogRows()}
          <tr>
            <td>
              <GearTextInput
                gearType='cog'
                placeholder='Cog'
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  },

  renderGearRatioColumns: function(cog) {
    var valueColumns = this.props.chainrings.map(function(chainring) {
      return <td key={cog.id + chainring.id}>{this._calculateRatio(chainring.value, cog.value)}</td>;
    }, this);

    return valueColumns;
  },

  renderCogRows: function() {
    var cogRows = this.props.cogs.map(function(cog, index) {
      return (
        <tr key={cog.id}>
          <td>{cog.value}</td>
          {this.renderGearRatioColumns(cog)}
        </tr>
      );
    }, this);

    return cogRows;
  },

  _calculateRatio: function(chainringValue, cogValue) {
    var ratio = chainringValue / cogValue;
    return Math.round(ratio * 100) / 100;
  }
});

module.exports = GearTable;
