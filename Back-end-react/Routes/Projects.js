const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleAccessShortURL
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleAccessShortURL);
router.get("/:shortId/edit", handleGetAnalytics);

module.exports = router;
