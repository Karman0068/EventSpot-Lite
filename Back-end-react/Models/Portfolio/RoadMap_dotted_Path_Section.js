const mongoose = require("mongoose");
const BOX = require("../Box");
const TEXTBOX = require("./TextBox_Section");

const RoadMap_Dotted_PathSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    traveller: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      enum: ["BOX", "TEXTBOX"], // Define the content type
      required: true,
    },
  },
);

const ROADMAP_DOTTED_PATHSECTION = mongoose.model("RoadMap_Dotted_PathSection", RoadMap_Dotted_PathSectionSchema);

module.exports = ROADMAP_DOTTED_PATHSECTION;
