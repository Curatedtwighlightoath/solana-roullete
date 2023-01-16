const express = require("express");
const router = express.Router();
const { wallets } = require("../models");


router.post("/", async (req, res) => {
  const wallet = req.user;
  await wallets.create(wallet);
  res.json(wallet);
});

module.exports = router;
