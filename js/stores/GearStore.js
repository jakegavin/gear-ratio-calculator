var alt = require('../alt');
var GearActions = require('../actions/GearActions');

class GearStore {
  constructor() {
    this.gears = {};

    this.bindListeners({
      handleCreateGear: GearActions.CREATE_GEAR,
      handleDestroy: GearActions.DESTROY
    });
  }

  handleCreateGear(gearHash) {
    var value = gearHash.value.trim();
    if (value === '') {
      return false;
    }

    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.gears[id] = {
      id: id,
      gearType: gearHash.gearType,
      value: value
    };
  }

  handleDestroy(id) {
    delete this.gears[id];
  }

  static getAllForType(specifiedType) {
    var allGears = this.getState().gears;
    var gears = [];

    for (var id in allGears) {
      if (allGears[id].gearType === specifiedType) {
        gears.push(allGears[id]);
      }
    }

    return gears;
  }
}

module.exports = alt.createStore(GearStore, 'GearStore');
