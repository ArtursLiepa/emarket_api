const mongoose = require("mongoose");
const { Schema } = mongoose;

const counterSchema = new Schema({
  _id: { type: String, required: true }, // collection name
  seq: { type: Number, default: 999 }, // start from 999 so first becomes 1000
});

module.exports = mongoose.model("Counter", counterSchema);
