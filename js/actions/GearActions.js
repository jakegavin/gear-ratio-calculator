var alt = require('../alt');

class GearActions {
  createGear(value) {
    this.dispatch(value);
  }
}

module.exports = alt.createActions(GearActions);
