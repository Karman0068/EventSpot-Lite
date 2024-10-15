const mongoose = require("mongoose");

const PortfolioFooterFormSchema = new mongoose.Schema(
  {
    Info: {
      type: [String],
      required: true,
    },
  },
);

const PORTFOLIOFOOTERFORM = mongoose.model("PortfolioFooterForm", PortfolioFooterFormSchema);

module.exports = PORTFOLIOFOOTERFORM;