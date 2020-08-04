const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSequence = new Schema({
  id: {
    type: Number,
    default: 0
  }
});

imageSequence.statics.getNextId = async function () {
  let actualId = await this.findOne({});

  if (!actualId) {
    actualId = await new this({}).save();
  }

  actualId.id++;
  actualId.save();

  return actualId.id;
};

module.exports = mongoose.model("imageSequence", imageSequence);
