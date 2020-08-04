const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const image = new Schema({
  url: String
});

module.exports = mongoose.model("images", image);