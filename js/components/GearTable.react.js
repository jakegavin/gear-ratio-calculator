var React = require('react');
var GearTextInput = require('./GearTextInput.react');
var SprocketCell = require('./SprocketCell.react');

var GearTable = React.createClass({
  propTypes: {
    chainrings: React.PropTypes.array.isRequired,
    cogs: React.PropTypes.array.isRequired
  },

  render: function() {
    var chainringRow = this.props.chainrings.map(function(chainring) {
      return <SprocketCell key={chainring.id} sprocket={chainring} />;
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

  renderGearRatioCells: function(cog) {
    var ratioCells = this.props.chainrings.map(function(chainring) {
      return <td key={cog.id + chainring.id}>{this._calculateRatio(chainring.value, cog.value)}</td>;
    }, this);

    return ratioCells;
  },

  renderCogRows: function() {
    var cogRows = this.props.cogs.map(function(cog, index) {
      return (
        <tr key={cog.id}>
          <SprocketCell sprocket={cog} />
          {this.renderGearRatioCells(cog)}
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
