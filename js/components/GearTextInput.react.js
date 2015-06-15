var React = require('react');

var ENTER_KEY_CODE = 13;

var GearTextInput = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    onSave: React.PropTypes.func.isRequired
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
    this.props.onSave(this.state.value);
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
