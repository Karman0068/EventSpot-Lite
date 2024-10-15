const mongoose = require("mongoose");
const TEXTBOX = require("./TextBox_Section");

const PortfolioFooterTextSectionSchema = new mongoose.Schema(
  {
    TextBox: {
      type: [TEXTBOX],
      required: true,
    },
  },
);

const PORTFOLIOFOOTERTEXTSECTION = mongoose.model("PortfolioFooterTextSection", PortfolioFooterTextSectionSchema);

module.exports = PORTFOLIOFOOTERTEXTSECTION;
