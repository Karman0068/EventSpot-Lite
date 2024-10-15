const mongoose = require("mongoose");

const ProfilePictureSchema = new mongoose.Schema(
  {
    Image: {
        type: URL,
        required: true,
      },
    Image: {
      type: URL,
      required: true,
    },
  },
  { timestamps: true }
);

const PROFILEPICTURE = mongoose.model("ProfilePicture", ProfilePictureSchema);

module.exports = PROFILEPICTURE;
