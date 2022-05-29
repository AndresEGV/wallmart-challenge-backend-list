const Ship = require("../models/Ship");
exports.getAllShips = async (req, res) => {
  try {
    const ships = await Ship.find();
    res.json(ships);
  } catch (error) {
    console.log(error);
  }
};
