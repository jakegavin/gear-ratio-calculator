var alt = require('../alt');

class GearActions {
  createGear(value) {
    this.dispatch(value);
  }

  destroy(id) {
    this.dispatch(id);
  }
}

module.exports = alt.createActions(GearActions);
