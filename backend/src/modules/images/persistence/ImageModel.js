const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const image = new Schema({
  id: {
    type: Number,
    required: true,
    index: { unique: true }
  },
  url: {
    type: String,
    required: true
  },
  quality: {
    type: String,
    required: true,
    enum: ["SD", "HD"]
  }
});

module.exports = mongoose.model("images", image);
