const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");

const router = express.Router();

router.get("admin/urls" , restrictTo(["ADMIN"]) , async (req, res) => {

  const allurls = await URL.find({});
  return res.json({
    urls: allurls,
  });
});

router.get("/", restrictTo(["NORMAL" , "ADMIN"]) , async (req, res) => {

  const allurls = await URL.find({ createdBy: req.user._id });
  return res.json({
    urls: allurls,
  });
});

router.get("/signup", (req, res) => {
  console.log({ message: ' signup! ' });
});

router.get("/login", (req, res) => {
  console.log({  message: " login! " });
});

module.exports = router;
