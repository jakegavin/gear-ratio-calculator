var React = require('react');
var GearActions = require('../actions/GearActions');

var ENTER_KEY_CODE = 13;

var GearTextInput = React.createClass({
  propTypes: {
    gearType: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      placeholder: ''
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  render: function() {
    return (
      <div>
        <input
          onBlur={this.handleSave}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleTextChanged}
          placeholder={this.props.placeholder}
          value={this.state.value}
        />
      </div>
    );
  },

  handleKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.handleSave();
    }
  },

  handleSave: function() {
    if (this.state.value.trim()) {
      GearActions.createGear({
        gearType: this.props.gearType,
        value: this.state.value
      });
    }

    this.setState({
      value: ''
    });
  },

  handleTextChanged: function(ev) {
    this.setState({
      value: ev.target.value
    });
  }
});

module.exports = GearTextInput;
