const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shipsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  manufacter: {
    type: String,
    trim: true,
  },
  passangers: {
    type: Number,
    required: true,
  },
  starShipClass: {
    type: String,
    required: true,
    trim: true,
  },
  cargoCapacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Ships", shipsSchema);
