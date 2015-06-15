var alt = require('../alt');
var GearActions = require('../actions/GearActions');

class GearStore {
  constructor() {
    this.gears = {};

    this.bindListeners({
      handleCreateGear: GearActions.CREATE_GEAR
    });
  }

  handleCreateGear(value) {
    value = value.trim();
    if (value === '') {
      return false;
    }

    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.gears[id] = {
      id: id,
      value: value
    };
  }
}

module.exports = alt.createStore(GearStore, 'GearStore');
