const mongoose = require("mongoose");
const { Schema } = mongoose;
const Counter = require("./idCreator");

const productSchema = new Schema(
  {
    _id: Number,
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    categoryID: { type: Number, required: true },
    categoryName: { type: String, required: true },
    segmentID: { type: Number, required: true },
    segmentName: { type: String, required: true },
  },
  { timestamps: true },
);

productSchema.pre("save", async function () {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "products" }, // name of collection
      { $inc: { seq: 1 } }, // increment by 1
      { returnDocument: "after", upsert: true },
    );

    this._id = counter.seq;
  }
});

module.exports = mongoose.model("Products", productSchema);
