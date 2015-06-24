var React = require('react');

var ENTER_KEY_CODE = 13;

var GearTextInput = React.createClass({
  propTypes: {
    editing: React.PropTypes.bool,
    gearType: React.PropTypes.string.isRequired,
    onSave: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      editing: false,
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
          autoFocus={this.props.editing}
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
      this.props.onSave({
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
