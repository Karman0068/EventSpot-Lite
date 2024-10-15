const mongoose = require("mongoose");

const TextBoxSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
  },
);

const TEXTBOX = mongoose.model("TextBox", TextBoxSchema);

module.exports = TEXTBOX;
