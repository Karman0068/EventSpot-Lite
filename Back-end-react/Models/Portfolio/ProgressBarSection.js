const mongoose = require("mongoose");

const ProgressBar = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true
    },
    progress:{
      type:String,
      required:true
    }
  }
)

const ProgressBarSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ProgressBar: {
      type: [ProgressBar],
      required: true,
    },
  },
);

const PROGRESSBARSECTION = mongoose.model("ProgressBarSection", ProgressBarSectionSchema);

module.exports = PROGRESSBARSECTION;
