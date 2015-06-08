var alt = require('../alt')
var GearActions = require('../actions/GearActions')

var gearStore = alt.createStore(class GearStore {
  constructor() {
    this.bindListeners(

    );

    this.gears = {}
  }
})

module.exports = gearStore
