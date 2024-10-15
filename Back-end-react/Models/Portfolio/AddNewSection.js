const mongoose = require("mongoose");
const BOX = require("../Box");
const TEXTBOX = require("./TextBox_Section");
const PROGRESSBARSECTION = require("./ProgressBarSection");
const ROADMAP_DOTTED_PATHSECTION = require("./RoadMap_dotted_Path_Section");

const AddNewSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      enum: ["GridBOX", "TEXTBOX", "PROGRESSBARSECTION", "ROADMAP_DOTTED_PATHSECTION"], // Define the content type
      required: true,
    },
  },
);

const ADDNEWSECTION = mongoose.model("AddNewSection", AddNewSectionSchema);

module.exports = ADDNEWSECTION;
