const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CarShema = new Schema({
  name: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  vehicleClass: {
    type: String,
    required: true
  },

  bodyType: {
    type: String,
    required: true
  },
  engineCapacity: { l: Number, hp: Number },
  transmission: {
    type: String,
    required: true
  },
  typeOfFuel: {
    type: String,
    required: true
  },

  capacityL: {
    type: Number,
    required: true
  },
  fuelCapacityL: {
    type: Number,
    required: true
  },

  prices: { oneThree: Number, fourNine: Number, tenPlus: Number },

  description: { en: String, ru: String }
});

module.exports = Item = mongoose.model("item", CarShema);
