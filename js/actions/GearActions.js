var alt = require('../alt');

class GearActions {
  createGear(value) {
    this.dispatch(value);
  }

  destroy(id) {
    this.dispatch(id);
  }

  updateValue(updatedHash) {
    this.dispatch(updatedHash);
  }

}

module.exports = alt.createActions(GearActions);
