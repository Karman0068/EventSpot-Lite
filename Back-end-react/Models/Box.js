const mongoose = require("mongoose");

const BoxSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    Image: {
      type: URL,
      required: true,
    },
    Like: {
      type: Boolean,
      required: true,
    },
    Comment: {
      type: Boolean,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const BOX = mongoose.model("Box", BoxSchema);

module.exports = BOX;
