var React = require('react');

var ENTER_KEY_CODE = 13;

var GearTextInput = React.createClass({
  propTypes: {
    gearType: React.PropTypes.string.isRequired,
    onSave: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
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
    this.props.onSave({
      gearType: this.props.gearType,
      value: this.state.value
    });
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
