const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ad = new Schema({
  id: {
    type: Number,
    required: true,
    index: { unique: true }
  },
  type: {
    type: String,
    required: true,
    enum: ["CHALET", "PISO", "FRIGORIFICO", "VEHICULO"]
  },
  imageIds: [[Number]],
  description: String,
  score: Number,
  size: Number,
  height: Number,
  km: Number,
  color: String,
  fabricant: String
});

module.exports = mongoose.model("ads", ad);
