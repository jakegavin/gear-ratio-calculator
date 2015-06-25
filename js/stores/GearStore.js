var alt = require('../alt');
var merge = require('object-assign');
var GearActions = require('../actions/GearActions');

class GearStore {
  constructor() {
    this.gears = {};

    this.bindListeners({
      handleAddCassette: GearActions.ADD_CASSETTE,
      handleCreateGear: GearActions.CREATE_GEAR,
      handleDestroy: GearActions.DESTROY,
      handleUpdateValue: GearActions.UPDATE_VALUE
    });
  }

  handleAddCassette(valueArray) {
    valueArray.forEach(function(cassetteValue) {
      this.handleCreateGear({
        gearType: 'cog',
        value: cassetteValue
      });
    }, this);
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

  handleUpdateValue(updatedHash) {
    var { id, value } = updatedHash;

    value = value ? value.trim() : '';
    if (value === '') {
      delete this.gears[id];
      return false;
    }

    if (this.gears[id] && value) {
      this.gears[id] = merge(this.gears[id], { value });
    }
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
