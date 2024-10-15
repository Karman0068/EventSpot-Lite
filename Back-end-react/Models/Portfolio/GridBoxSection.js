const mongoose = require("mongoose");
const BOX = require("../Box");

const GridBoxSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
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
    Boxes: {
      type: [BOX],
      required: true,
    },
  },
);

const GRIDBOXSECTION = mongoose.model("GridBoxSection", GridBoxSectionSchema);

module.exports = GRIDBOXSECTION;
